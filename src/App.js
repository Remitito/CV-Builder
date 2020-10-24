import React, { Component } from "react";
import "./App.css";
import General from "./General";
import Education from './Education'
import Work from './Work'
import Help from './Help'
import Skills from './Skills'

class App extends Component {
  render() {
  return (
    <div>
      <h1 id="head">CV Builder</h1>
    <div className="App" id="main">
      <div id="resumeCont">
      <div id="resume">
      <General />
      <h3>Education</h3>
      <Education />
      <h3>Work Experience</h3>
      <Work />
      <h3>Skills</h3>
      <Skills />
      </div>
      </div>
      <Help />
    </div>
    </div>
  );
}
}

export default App;


// Hide buttons for copying finished thing
// Alongside the CV can offer pointers
// Split the date things
// Textboxes need to empty after submitting
// Add delete function to edu textboxes