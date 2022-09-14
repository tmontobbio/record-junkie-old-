import "./App.css"
import Nav from "./Nav.js"
import AboutUs from "./AboutUs.js"
import Collection from "./Collection.js"
import DetailView from "./DetailView"
import { Switch, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
	const [records, setRecords] = useState([])
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		fetch("http://localhost:9292/records")
			.then((r) => r.json())
			.then((data) => setRecords(data))
	}, [])

	function showNewRecordForm() {
		setIsVisible(!isVisible)
	}

	function postRecord(recordObj) {
		setRecords([...records, recordObj])
	}

	function updateRecord(record) {
		setRecords((records) =>
			records.map((r) => {
				if (record.id == r.id) {
					return record
				} else {
					return r
				}
			})
		)
	}

	return (
		<div className="App">
			<Nav
				showNewRecordForm={showNewRecordForm}
				isVisible={isVisible}
				postRecord={postRecord}
			/>
			<Switch>
				<Route exact path="/">
					<Collection records={records} />
				</Route>
				<Route path="/about">
					<AboutUs />
				</Route>
				<Route path="/:id">
					<DetailView records={records} updateRecord={updateRecord} />
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>
	)
}

export default App
