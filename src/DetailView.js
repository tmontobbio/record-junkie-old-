import React, { useState, useEffect } from "react"
import { Form, TextArea, Button } from "semantic-ui-react"
import { useParams } from "react-router-dom"

import "./DetailView.css"

export default function DetailView({ records, updateRecord }) {
	const [isVisible, setIsVisible] = useState(false)
	const [textInput, setTextInput] = useState("")

	const { id } = useParams()
	const record = records.find((r) => r.id == id)

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
		})
			.then((response) => response.json())
			.then((record) => {
				console.log(record)
				updateRecord(record)
			})
	}

	function handleText(e) {
		setTextInput(e.target.value)
	}

	function toggleForm() {
		setIsVisible(!isVisible)
	}

	return (
		<div className="detail-card">
			{record ? (
				<>
					<div className="detail-image-container">
						<img
							src={record.image_url}
							alt={record.artist}
							className="detail-image"
						/>
					</div>
					<span className="details">
						<p>{record.artist}</p>
						<p>{record.album}</p>
						<p>Year: {record.year}</p>
					</span>
					<span className="description">{record.description}</span>
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
				</>
			) : null}
		</div>
	)
}
