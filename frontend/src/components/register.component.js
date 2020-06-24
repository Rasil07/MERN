import React, { Component } from "react";
import axios from "axios";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    };
    this.handlename = this.handlename.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handlecpassword = this.handlecpassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlename(e) {
    this.setState({ name: e.target.value });
  }
  handleemail(e) {
    this.setState({ email: e.target.value });
  }
  handlepassword(e) {
    this.setState({ password: e.target.value });
  }
  handlecpassword(e) {
    this.setState({ cpassword: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
    };

    axios.post("http://localhost:5000/user/register/", data).then((res) => {
      console.log(res);
    });
    // console.log(`name: ${this.state.name}, email: ${this.state.email}, password: ${this.state.password}, cpassword: ${this.state.cpassword}`);
    this.setState(
      {
        name: "",
        email: "",
        password: "",
        cpassword: "",
      },
      () => {
        document.getElementById("form").reset();
      }
    );
  }
  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.handlename}
              value={this.state.value}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.handleemail}
              value={this.state.value}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.handlepassword}
              value={this.state.value}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              name="cpassword"
              onChange={this.handlecpassword}
              value={this.state.value}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </div>
      </form>
    );
  }
}
