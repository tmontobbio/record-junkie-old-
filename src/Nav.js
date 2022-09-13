import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

export default function Nav() {
	return (
		<div id="nav-bar">
			<div id="title-container">🎧 Record Junkie</div>
			<div id="button-container">
				<Button.Group>
					<Button className="ui-button" type="button" as={Link} to="/">
						Collection
					</Button>
					<Button className="ui-button" type="button" as={Link} to="/submit">
						Submit Record
					</Button>
					<Button className="ui-button" type="button" as={Link} to="/about">
						About Us
					</Button>
				</Button.Group>
			</div>
		</div>
	)
}
