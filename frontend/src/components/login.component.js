import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      login: false
    };
    this.handleemail = this.handleemail.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleemail(e) {
    this.setState({ email: e.target.value });
  }
  handlepassword(e) {
    this.setState({ password: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("http://localhost:5000/user/login", data)
    .then(response=>{
      console.log(response.data.token);
      localStorage.setItem('token', JSON.stringify({
        login: true,
        token: response.data.token
      }))
    }).catch(err=>{
      console.log(err);
    })
    // const response= await axios.post("http://localhost:5000/user/login", data)
    
    // const jwt_token = await response.data;
    // console.log("response token", jwt_token);
    this.setState(
      {
        name: "",
        password: "",
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

          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    );
  }
}
