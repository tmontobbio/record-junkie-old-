import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react"

export default function Nav({ showNewRecordForm, isVisible }) {
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
			{isVisible ? (
				<Form>
					<Form.Group widths="equal">
						<Form.Field
							id="form-input-control-first-name"
							control={Input}
							placeholder="Artist"
						/>
						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							placeholder="Album"
						/>
						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							placeholder="Year"
						/>

						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							placeholder="Image Url"
						/>
					</Form.Group>
					<Form.Field
						id="form-textarea-control-opinion"
						control={TextArea}
						placeholder="Description"
					/>
					<Form.Field
						id="form-button-control-public"
						control={Button}
						content="Submit"
					/>
				</Form>
			) : null}
		</div>
	)
}
