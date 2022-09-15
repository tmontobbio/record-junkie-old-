import React, { useState, useEffect } from "react"
import { Button, Form, Header } from "semantic-ui-react"
import SingleComment from "./SingleComment"
import "./index.css"

export default function Comments({ id }) {
	const [comments, setComments] = useState([])
	const [name, setName] = useState("")
	const [body, setBody] = useState("")

	useEffect(() => {
		fetch(`http://localhost:9292/comments/${id}`)
			.then((r) => r.json())
			.then((data) => setComments(data))
	}, [])

	function postComment(commentObj) {
		setComments([...comments, commentObj])
	}

	function handlePost(e) {
		e.preventDefault()

		let commentObj = {
			name: name,
			body: body,
			record_id: id,
		}

		fetch(`http://localhost:9292/comments`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(commentObj),
		})
			.then((r) => r.json())
			.then((data) => postComment(data))
		e.target.reset()
	}

	function deleteComment() {
		fetch(`http://localhost:9292/comments/${id}`, { method: "DELETE" })
	}

	const renderComments = comments.map((comment) => {
		return (
			<SingleComment
				key={comment.id}
				date={comment.date}
				name={comment.name}
				body={comment.body}
				deleteComment={deleteComment}
			/>
		)
	})

	return (
		<div className="comments-container">
			<Header as="h3" dividing>
				Comments
			</Header>
			<div className="comments-panel">{renderComments}</div>
			<div className="comments-form">
				<Form onSubmit={handlePost}>
					<Header as="h2" dividing></Header>
					<Form.Field onChange={(e) => setName(e.target.value)} value={name}>
						<label>Username:</label>
						<input placeholder="" />
					</Form.Field>
					<Form.Field onChange={(e) => setBody(e.target.value)} value={body}>
						<label>Comment Body:</label>
						<input placeholder="" />
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</div>
		</div>
	)
}
