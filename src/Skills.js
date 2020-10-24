import React, {Component} from 'react'

export default class extends Component {
    constructor() {
        super()
        this.state = {skills: ['Fluent in Chinese (HSK6)'], currentSkill: ""}
    }

    skillChange = () => {
        const elements = ['addSkill', 'subSkill', 'cancelSkill', 'skillText']
        for (let i = 0; i < elements.length; i++) {
            if (document.getElementById(elements[i]).style.display === "block") {
                document.getElementById(elements[i]).style.display = 'none'
            }
            else {
                document.getElementById(elements[i]).style.display = 'block'
            }
        }
    }

    updateCurrent = (e) => {
        this.state.currentSkill = e.target.value
    }

    addNewSkill = () => {
        if (this.state.currentSkill !== '') {
            let skillArray = this.state.skills;
            skillArray.push(this.state.currentSkill)
            this.cancelSkill()
        }
    } 

    cancelSkill = () => {
        this.setState({currentSkill: ''})
        document.getElementById('skillText').value = ''
        this.skillChange()
    }

    deleteEntry = (e) => {
        const skillCopy = Object.assign([], this.state.skills)
        skillCopy.splice(e.target.value, 1)
        this.setState({skills: skillCopy})
      }

    render() {
        return (
            <div>
                    {this.state.skills.map((item, index) => {
                        return (
                        <ul>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', width: '765px'}}>
                        <li id={"skill" + index}>{item}</li>
                        <button id={index + 'skill'} className="delBut" style={{display: 'block', width: "33px", height: "33px", lineHeight: "0"}} value={index} onClick={this.deleteEntry}></button>
                        </div>
                        </ul>
                    )})}

                <input onChange={this.updateCurrent} maxLength='80' id="skillText" style={{display: 'none', fontSize: '20px'}}placeholder="Enter Skill..."></input>
                <button onClick={this.skillChange} id="addSkill" style={{display: "block", fontSize: '17px'}}>Add New</button>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={this.addNewSkill} id="subSkill" style={{display: "none", fontSize: '20px'}}>Submit</button>
                <button onClick={this.cancelSkill} id="cancelSkill" style={{color: 'red', fontWeight: 'bolder', display: "none", fontSize: '20px'}}>Cancel</button>
                </div>
            </div>
        )
    }
}