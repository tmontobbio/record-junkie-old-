import "./App.css";
import Nav from "./Nav.js";
import AboutUs from "./AboutUs.js";
import SubmitRecord from "./SubmitRecord.js";
import Collection from "./Collection.js";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/records")
      .then((r) => r.json())
      .then((data) => setRecords(data));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Collection records={records} />
        </Route>
        <Route path="/submit">
          <SubmitRecord />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
