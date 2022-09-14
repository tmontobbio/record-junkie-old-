import React, { useState } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import { Form, Input, Button } from "semantic-ui-react"

export default function Nav({
	showNewRecordForm,
	isVisible,
	postRecord,
	setIsVisible,
}) {
	const [artist, setArtist] = useState("")
	const [album, setAlbum] = useState("")
	const [year, setYear] = useState("")
	const [description, setDescription] = useState("")
	const [imageUrl, setImageUrl] = useState("")

	function handleArtist(e) {
		setArtist(e.target.value)
	}
	function handleAlbum(e) {
		setAlbum(e.target.value)
	}
	function handleYear(e) {
		setYear(e.target.value)
	}
	function handleDescription(e) {
		setDescription(e.target.value)
	}
	function handleImage(e) {
		setImageUrl(e.target.value)
	}

	function handleSubmission(e) {
		e.preventDefault()

		let recordObj = {
			artist: artist,
			album: album,
			year: year,
			description: description,
			image_url: imageUrl,
		}

		fetch("http://localhost:9292/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recordObj),
		})
			.then((r) => r.json())
			.then((data) => postRecord(data))
		showNewRecordForm()
	}

	return (
		<div id="nav-bar">
			<div id="title-container">🎧 Record Junkie</div>
			<div id="button-container">
				<Button.Group>
					<Button className="ui-button" type="button" as={Link} to="/">
						Collection
					</Button>
					<Button
						className="ui-button"
						type="button"
						onClick={showNewRecordForm}
					>
						Submit Record
					</Button>
					<Button className="ui-button" type="button" as={Link} to="/about">
						About Us
					</Button>
				</Button.Group>
			</div>
			<div id="submit-record-container">
				{isVisible ? (
					<Form onSubmit={handleSubmission}>
						<Form.Group widths="equal">
							<Form.Field
								onChange={handleArtist}
								value={artist}
								id="form-input-control-first-name"
								control={Input}
								placeholder="Artist"
							/>
							<Form.Field
								onChange={handleAlbum}
								value={album}
								id="form-input-control-last-name"
								control={Input}
								placeholder="Album"
							/>
							<Form.Field
								onChange={handleYear}
								value={year}
								id="form-input-control-last-name"
								control={Input}
								placeholder="Year"
							/>
							<Form.Field
								onChange={handleDescription}
								value={description}
								id="form-input-control-last-name"
								control={Input}
								placeholder="Image Url"
							/>
							<Form.Field
								onChange={handleImage}
								value={imageUrl}
								id="form-textarea-control-opinion"
								control={Input}
								placeholder="Description"
							/>
							<Form.Field
								id="form-button-control-public"
								control={Button}
								content="Submit"
							/>
						</Form.Group>
					</Form>
				) : null}
			</div>
		</div>
	)
}
