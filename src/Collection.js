import React from "react"
import RecordCard from "./RecordCard.js"
import "./Collection.css"

export default function Collection({ records }) {
	const recordCard = records.map((record) => {
		return (
			<RecordCard
				key={record.id}
				id={record.id}
				image_url={record.image_url}
				artist={record.artist}
			/>
		)
	})

	return <div className="collection">{recordCard}</div>
}
