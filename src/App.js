import "./App.css"
import Nav from "./Nav.js"
import AboutUs from "./AboutUs.js"
import SubmitRecord from "./SubmitRecord.js"
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

	return (
		<div className="App">
			<Nav showNewRecordForm={showNewRecordForm} isVisible={isVisible} />
			<Switch>
				<Route exact path="/">
					<Collection records={records} />
				</Route>
				{/* <Route path="/submit">
					<SubmitRecord />
				</Route> */}
				<Route path="/about">
					<AboutUs />
				</Route>
				<Route path="/:id">
					<DetailView setRecords={setRecords} records={records} />
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>
	)
}

export default App
