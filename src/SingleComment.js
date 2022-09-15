import React from "react"
import "./index.css"
import { Comment } from "semantic-ui-react"

export default function SingleComment({ name, body, date, deleteComment }) {
	return (
		<Comment.Group>
			<Comment>
				<Comment.Avatar
					as="a"
					src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
				/>
				<Comment.Content>
					<button onClick={deleteComment}>X</button>
					<Comment.Author>{name}</Comment.Author>
					<Comment.Metadata>
						<div>{date}</div>
					</Comment.Metadata>
					<Comment.Text>{body}</Comment.Text>
				</Comment.Content>
			</Comment>
		</Comment.Group>
	)
}
