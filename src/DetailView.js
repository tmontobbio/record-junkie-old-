import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Form, TextArea, Button } from "semantic-ui-react"
import "./DetailView.css"

export default function DetailView() {
	const [selectedRecord, setSelectedRecord] = useState({})
	const [isVisible, setIsVisible] = useState(false)
	const [textInput, setTextInput] = useState("")
	const { id } = useParams()

	useEffect(() => {
		fetch(`http://localhost:9292/records/${id}`)
			.then((r) => r.json())
			.then((rec) => {
				setSelectedRecord(rec)
			})
	}, [id])

	function deleteRecord() {
		fetch(`http://localhost:9292/records/${id}`, { method: "DELETE" })
	}

	function updateDescription(e) {
		let recordObj = {
			description: textInput,
		}

		fetch(`http://localhost:9292/records/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recordObj),
		}).then((response) => response.json())
	}

	function handleText(e) {
		setTextInput(e.target.value)
	}

	function toggleForm() {
		setIsVisible(!isVisible)
	}

	return (
		<div className="detail-card">
			<div className="detail-image-container">
				<img
					src={selectedRecord.image_url}
					alt={selectedRecord.artist}
					className="detail-image"
				/>
			</div>
			<span className="details">
				<p>{selectedRecord.artist}</p>
				<p>{selectedRecord.album}</p>
				<p>Year: {selectedRecord.year}</p>
			</span>
			<span className="description">{selectedRecord.description}</span>
			<br />
			<Button color="blue" onClick={toggleForm}>
				Update
			</Button>
			<Button color="red" onClick={deleteRecord}>
				Delete
			</Button>
			<br />
			{isVisible ? (
				<Form onSubmit={updateDescription}>
					<Form.Group widths="equal">
						<Form.Field
							onChange={handleText}
							value={textInput}
							id="form-textarea-control-description"
							control={TextArea}
							placeholder="Description"
						/>
					</Form.Group>
					<Form.Field
						id="form-button-control-public"
						control={Button}
						content="Confirm"
					/>
				</Form>
			) : null}
		</div>
	)
}
