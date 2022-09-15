import React, { useState } from "react"
import "./index.css"
import { Link } from "react-router-dom"
import { Form, Input, Button } from "semantic-ui-react"

export default function Nav({ showNewRecordForm, postRecord, isVisible }) {
	const [artist, setArtist] = useState("")
	const [album, setAlbum] = useState("")
	const [year, setYear] = useState("")
	const [description, setDescription] = useState("")
	const [imageUrl, setImageUrl] = useState("")

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
		e.target.reset()
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
								onChange={(e) => setArtist(e.target.value)}
								value={artist}
								control={Input}
								placeholder="Artist"
							/>
							<Form.Field
								onChange={(e) => setAlbum(e.target.value)}
								value={album}
								control={Input}
								placeholder="Album"
							/>
							<Form.Field
								onChange={(e) => setYear(e.target.value)}
								value={year}
								control={Input}
								placeholder="Year"
							/>
							<Form.Field
								onChange={(e) => setDescription(e.target.value)}
								value={description}
								control={Input}
								placeholder="Description"
							/>
							<Form.Field
								onChange={(e) => setImageUrl(e.target.value)}
								value={imageUrl}
								control={Input}
								placeholder="Image Url"
							/>
							<Form.Field control={Button} content="Submit" />
						</Form.Group>
					</Form>
				) : null}
			</div>
		</div>
	)
}
