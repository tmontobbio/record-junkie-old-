import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

export default function Nav() {
	return (
		<div id="nav">
			<div id="title">🎧 Record Junkie</div>
			<div id="button-container">
				<Button.Group widths="5">
					<Link to="/">
						<Button className="ui button" type="button">
							Collection
						</Button>
					</Link>
					<Link to="/submit">
						<Button className="ui button" type="button">
							Submit Record
						</Button>
					</Link>
					<Link to="/about">
						<Button className="ui button" type="button">
							About Us
						</Button>
					</Link>
				</Button.Group>
			</div>
		</div>
	)
}
