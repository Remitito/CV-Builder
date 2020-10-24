import React, {Component} from 'react'

export default class Work extends Component {
    constructor() {
        super()
        this.curDates = ''
        this.entryInfo = {fromDayWork: "", fromMonthWork: "", fromYearWork: "", toDayWork: "", toMonthWork: "", toYearWork: "", curTit: "", curSum: "", curSchool: ""}
        this.presentWork = 'no' 
        this.state = {
          work: [{id: "work1", fromDates: "01/01/2000", toDates: "02/02/2001", jobTitle: "Technical Copywriter", company: "Tech Kings", summaryWork: "Responsibilities included technical writing and social media focused copywriting"},]}
      }
      
      workChange = () => {
        const elements = ['work', 'warnWork', 'workEntry', 'addWork', 'subWork', 'cancelWork']
        for (let i = 0; i < elements.length; i++) {
          if (document.getElementById(elements[i]).style.display === "block") {
            document.getElementById(elements[i]).style.display = "none"
          }
          else {
            document.getElementById(elements[i]).style.display = "block"
          }
        }
      }
      
      submitWork = () => {
        if (this.entryInfo.fromDayWork !== "" && this.entryInfo.fromMonthWork !== "" && this.entryInfo.fromYearWork !== "" && this.entryInfo.toDayWork !== "" && this.entryInfo.toMonthWork !== "" && this.entryInfo.toYearWork !== "" && this.entryInfo.curTit !== "" && this.entryInfo.curcompany !== "" && this.entryInfo.curSum !== "") {
        const eduArrayCopy = Object.assign([], this.state.work)
        const curLength = parseInt(eduArrayCopy.length)
        const dates = [this.entryInfo.fromDayWork, this.entryInfo.fromMonthWork, this.entryInfo.fromYearWork, this.entryInfo.toDayWork, this.entryInfo.toMonthWork, this.entryInfo.toYearWork]
        const fromDates = dates[0] + '/' + dates[1] + '/' + dates[2]
        const toDates = dates[3] + '/' + dates[4] + '/' + dates[5]
        console.log(fromDates, toDates)
        eduArrayCopy.push({
          id: "ed" + parseInt(curLength + 1).toString(),
          fromDates: fromDates,
          toDates: toDates,
          jobTitle: this.entryInfo.curTit,
          company: this.entryInfo.curcompany,
          info: this.entryInfo.curSum
        })
        this.setState({work: eduArrayCopy})
        this.entryInfo.fromDayWork = ''
        this.cancelWork()
      }
      else {
        return 0
      }
    }

    cancelWork = () => {
      for (let e = 0; e < this.entryInfo.length; e++) {
        this.entryInfo[e] = ""
      }
      let elements = ['fromDayWork', 'fromMonthWork', 'fromYearWork', 'toDayWork', 'toMonthWork', 'toYearWork', 'jobTitle', 'company', 'summaryWork']
      for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i]).value = ""
      }
      document.getElementById('presentWork').checked = false;
      console.log(this.entryInfo.fromDayWork)
      this.workChange()
    }
      
      deleteEntry = (e) => {
        const eduArrayCopy = Object.assign([], this.state.work)
        eduArrayCopy.splice(e.target.value, 1)
        this.setState({work: eduArrayCopy})
      }

      handlePresentWork = () => {
        if (this.presentWork === "no") {
          var toDayWork = new Date();
          this.entryInfo.toDayWork = String(toDayWork.getDate()).padStart(2, '0');
          document.getElementById('toDayWork').value = this.entryInfo.toDayWork
          this.entryInfo.toMonthWork = String(toDayWork.getMonth() + 1).padStart(2, '0'); 
          document.getElementById('toMonthWork').value = this.entryInfo.toMonthWork
          this.entryInfo.toYearWork = toDayWork.getFullYear();
          document.getElementById('toYearWork').value = this.entryInfo.toYearWork
        }
        else {
          this.presentWork = "no"
        }

      }

    render() {
        return (
            <div>
            <div style={{display: "block"}} id="work">
            {this.state.work.map((qual, index) => {
              return (
            <div id="workCont" className="eduCont" key={'ed' + index} className="eduSwitch">
              <div>
                <label className="curDates">{qual.fromDates}<br/></label>
                <label className="curDates">{qual.toDates}</label>
                </div>
                <div className="eduInfo">
                  <div className="delete">
                    <label>{qual.jobTitle} <br/> {qual.company} </label>
                    <button id={qual.id} className="delBut" style={{display: 'block', width: "33px", height: "33px", lineHeight: "0"}} value={index} onClick={this.deleteEntry}></button>
                    </div>
                    <p className="eduCont">{qual.summaryWork}</p>
                </div>
                </div>)
            })}
            </div>
              <div className="eduSwitch" style={{display: "none"}} id="workEntry">
                <form>
                <div className="dateCont">
  <input defaultValue="" maxLength="2" id="fromDayWork" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.fromDayWork = e.target.value}} placeholder="Day"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="2" id="fromMonthWork" className="dayMon" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.fromMonthWork = e.target.value}} placeholder="Month"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="4" id="fromYearWork" className="year" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.fromYearWork = e.target.value}} placeholder="Year"></input>
  <br/>
  </div>
  <div className="dateCont">
  <input defaultValue="" maxLength="2" id="toDayWork" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.toDayWork = e.target.value}} placeholder="Day"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input defaultValue="" maxLength="2" id="toMonthWork" style={{fontSize: '16px'}} className="dayMon" onChange={(e) => {this.entryInfo.toMonthWork = e.target.value}} placeholder="Month"></input><label style={{lineHeight: '2', color: 'grey'}}>/</label>
  <br/>
  <input  defaultValue="" maxLength="4" id="toYearWork" style={{fontSize: '16px'}} className="year" onChange={(e) => {this.entryInfo.toYearWork = e.target.value}} placeholder="Year"></input>
  <input type="checkbox" onChange={this.handlePresentWork} id="presentWork" name="presentWork"/>
  <label htmlFor="presentWork" style={{lineHeight: "2"}}>Present</label>
  <br/>
  </div>
  <input className="workEntry" maxLength="50" id="jobTitle" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curTit = e.target.value}} placeholder="Job Title"></input>
  <br/>
  <input className="workEntry" maxLength="50" id="company" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curCompany = e.target.value}} placeholder="Company"></input>
  <br/>
  <textarea className="workEntry" id="summaryWork" style={{fontSize: '16px'}} onChange={(e) => {this.entryInfo.curSum = e.target.value}} placeholder="Summary"></textarea>
  </form>
  </div>
  <button id="addWork" style={{display: "block", fontSize: '17px'}} onClick={this.workChange}>Add New</button>
  <div style={{display: "flex", flexDirection: "row"}}>
  <button id="subWork" style={{display: "none"}} className="submitBut" onClick={this.submitWork}>Submit Entry</button>
  <button id="cancelWork" style={{display: "none"}}  className="cancClear" onClick={this.cancelWork}>Cancel</button>
  </div>
  <label id="warnWork" style={{display: "none"}} onClick={this.workChange}>Please fill in all textboxes to continue</label>
  </div>
        )
    }
}