import React from "react"
import "./RecordCard.css"
import { Link } from "react-router-dom"

export default function RecordCard({ image_url, artist, id }) {
	return (
		<div className="image-card">
			<Link color="" to={`/${id}`}>
				<img src={image_url} alt={artist} className="image" />
			</Link>
		</div>
	)
}
