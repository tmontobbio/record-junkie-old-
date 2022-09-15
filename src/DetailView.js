import React, { useState, useEffect } from "react"
import { Form, Input, Button, Header } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import Comments from "./Comments"
import "./index.css"

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
		e.target.reset()
		setIsVisible(!isVisible)
	}

	function handleText(e) {
		setTextInput(e.target.value)
	}

	function toggleForm() {
		setIsVisible(!isVisible)
	}

	return (
		<div id="detail-container">
			<div className="detail-card">
				{record ? (
					<>
						<div>
							<img
								src={record.image_url}
								alt={record.artist}
								className="detail-image"
							/>
						</div>
						<Header as="h2" dividing></Header>
						<span className="details">
							<p>
								{record.artist}
								<br />
								{record.album}
								<br />
								{record.year}
							</p>
						</span>
						<span className="description">{record.description}</span>
						<br />
						{isVisible ? (
							<Form onSubmit={updateDescription}>
								<Form.Group widths="equal">
									<Form.Field
										onChange={handleText}
										value={textInput}
										id="form-textarea-control-description"
										control={Input}
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
				<Header as="h2" dividing></Header>
				<Button color="blue" onClick={toggleForm}>
					Update
				</Button>
				<Button color="red" onClick={deleteRecord}>
					Delete
				</Button>
			</div>
			<Comments id={id} />
		</div>
	)
}
