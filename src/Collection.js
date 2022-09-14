import React from "react"
import RecordCard from "./RecordCard.js"
import "./Collection.css"
import { Card } from "semantic-ui-react"

export default function Collection({ records }) {
	const recordCard = records.map((record) => {
		return (
			<RecordCard
				key={record.image_url}
				id={record.id}
				image_url={record.image_url}
				artist={record.artist}
			/>
		)
	})

	return <Card.Group itemsPerRow={5}>{recordCard}</Card.Group>
}
