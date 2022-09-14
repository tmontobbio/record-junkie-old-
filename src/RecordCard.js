import React from "react"
import "./RecordCard.css"
import { Card } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function RecordCard({ image_url, artist, id }) {
	return (
		<Card>
			<Link color="" to={`/${id}`}>
				<div className="record-card">
					<img src={image_url} alt={artist} className="image" />
				</div>
			</Link>
		</Card>
	)
}
