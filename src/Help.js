import React, { Component } from 'react'
import Work from './Work'
import Skills from './Skills'


export default class Help extends Component {
      constructor() {
            super()
            this.state = {tempHidden: []}
      }


      hideButtons = () => {
            const buttons = document.querySelectorAll('button')
            let newHidden = []
            for (let i = 0; i < buttons.length; i++) {
                  if (buttons[i].style.display === 'block') {
                        newHidden.push(buttons[i].id)
                        buttons[i].style.display = 'none';
                  }
            }
            this.setState({tempHidden: newHidden})
            console.log(newHidden)
            document.getElementById('showButtons').style.display = "block"
            document.getElementById('hideButtons').style.display = 'none'
      }

      showButtons = () => {
            const info = this.state.tempHidden
            console.log(info)
            for (let i = 0; i < info.length; i++) {
                  document.getElementById(info[i]).style.display = 'block';
            }
            this.setState({tempHidden: []})
            document.getElementById('showButtons').style.display = "none"
            document.getElementById('hideButtons').style.display = 'block'
      }

      onColor = (e) => {
            e.target.style.color = "#c9c5b9"
      }
      offColor = (e) => {
            e.target.style.color = "white"
      }


      render() {
    return       <div id="help">
        <div id="helpText">
      Icons made by <a  onMouseOver={this.onColor} onMouseOut={this.offColor} style={{color: 'white', textDecoration: 'none'}} href="https://www.flaticon.com/authors/xnimrodx" title="Freepik">Freepik</a> from
       <a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{color: 'white', textDecoration: 'none'}} href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      
      </div>
      <br/>
      <label style={{margin: "10px"}}>
Background Image by <a  onMouseOver={this.onColor} onMouseOut={this.offColor} style={{color: 'white', textDecoration: 'none'}} href="https://www.pexels.com/@energepic-com-27411">energepic.com</a> from 
<a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{color: 'white', textDecoration: 'none'}} href="https://www.pexels.com"> Pexels</a>

</label>
<div id="helpButCont">
<button className="helpBut" id="hideButtons" onClick={this.hideButtons}>Hide Buttons on CV</button>
<button className="helpBut" onClick={this.showButtons} style={{display:"none"}} id="showButtons">Show Buttons on CV</button>

</div>
<label id="disc">This was made as a practice project, following the curriculum of <a  onMouseOver={this.onColor} onMouseOut={this.offColor} style={{color: 'white', textDecoration: 'none'}} href="theodinproject.com/">The Odin Project</a></label>
      </div>
      }
}


