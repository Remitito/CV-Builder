import React, { Component } from "react";

export default class General extends Component {
  constructor() {
    super();
    this.state = {
      editCont: 'none',
      showCont: 'block',
      name: "Ann Kowalski",
      address: "1000 Second Ave. NE | Portland, OR 97205",
      phone: "503-555-0123",
      email: "a.kowalski@email.com",
      prof:
        "Creative copywriter with six years of writing advertising copy for marketing agencies. Expert knowledge of SEO best practices and keyword optimization. Uses research skills to craft unique and valuable content for a wide variety of target audiences. Wrote content for marketing campaigns that increased brand awareness by 40%.",
    };
  }

updateEntry = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

editOrNot = () => {
  this.setState({editCont: this.state.showCont, showCont: this.state.editCont})
}

clearAll = () => {
  this.setState({name: "", address: '', phone: '', email: '', prof: ''})
}

  render() {
    const { name, address, phone, email, prof, editCont, showCont } = this.state;
    return (
      <div id="general">
        <div id="generalSet" style={{display: showCont}}>
          <label id="name">{name}</label>
          <div id="contact">
            <label />
            {address}
            <label />
            {phone}
            <label />
            {email}
          </div>
          <h3 id="prof">Professional Profile</h3>
          <p>{prof}</p>
          <button id="genEdit" style={{fontSize: '17px', display: 'block'}} onClick={this.editOrNot}>Edit General Information</button>
        </div>
        <div id="generalEdit" style={{display: editCont}}>
          <input className="contactStuff" value={name} onChange={this.updateEntry} type="text" name="name" placeholder="Name....." />
          <div id="contact">
            <input value={address} className="contactStuff" onChange={this.updateEntry} type="text" name="address" placeholder="Address....." />
            <input value={phone} className="contactStuff" onChange={this.updateEntry} type="text" name="phone" placeholder="Phone Number..." />
            <input value={email} className="contactStuff" onChange={this.updateEntry} type="text" name="email" placeholder="Email...." />
          </div>
          <h3 id="prof">Professional Profile</h3>
          <textarea value={prof} onChange={this.updateEntry} id="profEntry" type="text" name="prof" placeholder="Profile...."></textarea>
          <br/>
          <div>
          <button id="genSubmit" className="submitBut" onClick={this.editOrNot}>Submit New Information</button>
          <button id="genClear" className="cancClear" onClick={this.clearAll}>Clear All</button>
          </div>
        </div>
      </div>
    );
  }
}
