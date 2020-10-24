import React, {Component} from 'react'

export default class Education extends Component {
    constructor() {
        super()
        this.curDates = ''
        this.entryInfo = {fromDay: "", fromMonth: "", fromYear: "", toDay: "", toMonth: "", toYear: "", curTit: "", curSum: "", curSchool: ""}
        this.present = 'no' 
        this.state = {
          education: [{id: "ed1", fromDates: "01/01/2000", toDates: "02/02/2001", title: "BA in Computer Science", school: "Stanford University", info: "A comprehensive four-year course culminating in a thesis focused on Java programming"},]}
      }
      
      eduChange = () => {
        const elements = ['education', 'warnEdu', 'eduEntry', 'addEdu', 'subEdu', 'cancelEdu']
        for (let i = 0; i < elements.length; i++) {
          if (document.getElementById(elements[i]).style.display === "block") {
            document.getElementById(elements[i]).style.display = "none"
          }
          else {
            document.getElementById(elements[i]).style.display = "block"
          }
        }
      }
      
      submitEdu = () => {
        if (this.entryInfo.fromDay !== "" && this.entryInfo.fromMonth !== "" && this.entryInfo.fromYear !== "" && this.entryInfo.toDay !== "" && this.entryInfo.toMonth !== "" && this.entryInfo.toYear !== "" && this.entryInfo.curTit !== "" && this.entryInfo.curSchool !== "" && this.entryInfo.curSum !== "") {
        const eduArrayCopy = Object.assign([], this.state.education)
        const curLength = parseInt(eduArrayCopy.length)
        const dates = [this.entryInfo.fromDay, this.entryInfo.fromMonth, this.entryInfo.fromYear, this.entryInfo.toDay, this.entryInfo.toMonth, this.entryInfo.toYear]
        const fromDates = dates[0] + '/' + dates[1] + '/' + dates[2]
        const toDates = dates[3] + '/' + dates[4] + '/' + dates[5]
        console.log(fromDates, toDates)
        eduArrayCopy.push({
          id: "ed" + parseInt(curLength + 1).toString(),
          fromDates: fromDates,
          toDates: toDates,
          title: this.entryInfo.curTit,
          school: this.entryInfo.curSchool,
          info: this.entryInfo.curSum
        })
        this.setState({education: eduArrayCopy})
        this.entryInfo.fromDay = ''
        this.cancelEdu()
      }
      else {
        return 0
      }
    }

    tester = () => {
      console.log('success')
    }

    cancelEdu = () => {
      for (let e = 0; e < this.entryInfo.length; e++) {
        this.entryInfo[e] = ""
      }
      let elements = ['fromDay', 'fromMonth', 'fromYear', 'toDay', 'toMonth', 'toYear', 'title', 'school', 'summary']
      for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i]).value = ""
      }
      document.getElementById('present').checked = false;
      console.log(this.entryInfo.fromDay)
      this.eduChange()
    }
      
      deleteEntry = (e) => {
        const eduArrayCopy = Object.assign([], this.state.education)
        eduArrayCopy.splice(e.target.value, 1)
        this.setState({education: eduArrayCopy})
      }

      handlePresent = () => {
        console.log('hello')
        if (this.present === "no") {
          var today = new Date();
          this.entryInfo.toDay = String(today.getDate()).padStart(2, '0');
          document.getElementById('toDay').value = this.entryInfo.toDay
          this.entryInfo.toMonth = String(today.getMonth() + 1).padStart(2, '0'); 
          document.getElementById('toMonth').value = this.entryInfo.toMonth
          this.entryInfo.toYear = today.getFullYear();
          document.getElementById('toYear').value = this.entryInfo.toYear
        }
        else {
          this.present = "no"
        }

      }

    render() {
        return (
            <div>
            <div style={{display: "block"}} id="education">
            {this.state.education.map((qual, index) => {
              return (
            <div id="eduCont" className="eduCont" key={'ed' + index} className="eduSwitch">
              <div>
                <label className="curDates">{qual.fromDates}<br/></label>
                <label className="curDates">{qual.toDates}</label>
                </div>
                <div className="eduInfo">
                  <div className="delete">
                    <label>{qual.title} <br/> {qual.school} </label>
                    <button id={qual.id} className="delBut" style={{display: 'block', width: "33px", height: "33px", lineHeight: "0"}} value={index} onClick={this.deleteEntry}></button>
                    </div>
                    <p className="eduCont">{qual.info}</p>
                </div>
                </div>)
            })}
            </div>
              <div className="eduSwitch" style={{display: "none"}} id="eduEntry">
                <form>
                <div className="dateCont">
  <input defaultValue="" maxLength="2" id="fromDay" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.fromDay = e.target.value}} placeholder="Day"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="2" id="fromMonth" className="dayMon" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.fromMonth = e.target.value}} placeholder="Month"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="4" id="fromYear" className="year" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.fromYear = e.target.value}} placeholder="Year"></input>
  <br/>
  </div>
  <div className="dateCont">
  <input defaultValue="" maxLength="2" id="toDay" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.toDay = e.target.value}} placeholder="Day"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input defaultValue="" maxLength="2" id="toMonth" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.toMonth = e.target.value}} placeholder="Month"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="4" id="toYear" style={{fontSize: '16px'}} className="year" onChange={(e) => {this.entryInfo.toYear = e.target.value}} placeholder="Year"></input>
  <input type="checkbox" onChange={this.handlePresent} id="present" name="present"/>
  <label htmlFor="present" style={{lineHeight: "2"}}>Present</label>
  <br/>
  </div>
  <input className="eduEntry" maxLength="50" id="title" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curTit = e.target.value}} placeholder="Title"></input>
  <br/>
  <input className="eduEntry" maxLength="50" id="school" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curSchool = e.target.value}} placeholder="School"></input>
  <br/>
  <textarea className="eduEntry" id="summary" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curSum = e.target.value}} placeholder="Summary"></textarea>
  </form>
  </div>
  <button id="addEdu" style={{display: "block", fontSize: '17px'}} onClick={this.eduChange}>Add New</button>
  <div style={{display: "flex", flexDirection: "row"}}>
  <button id="subEdu" style={{display: "none"}} className="submitBut" onClick={this.submitEdu}>Submit Entry</button>
  <button id="cancelEdu" style={{display: "none"}}  className="cancClear" onClick={this.cancelEdu}>Cancel</button>
  </div>
  <label id="warnEdu" style={{display: "none"}} onClick={this.eduChange}>Please fill in all textboxes to continue</label>
  </div>
        )
    }
}