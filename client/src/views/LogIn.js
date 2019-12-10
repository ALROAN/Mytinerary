import React, { Component } from 'react';
import { logIn } from "../redux/actions/userActions"
import { Link } from "react-router-dom";
import { withAuth } from "../redux/actions/userActions"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { viewLogin } from "../redux/actions/userActions"





class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loginSucces: false
    };
  }


  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });

  }


  onSubmit = (event) => {
    event.preventDefault();
    logIn(this.state);
    this.setState({
      loginSucces: true
    });
    console.log(this.state.loginSucces);
  }


  render() {

    return (
      <div className="loginDiv">
        <div className="loginCont">
          <form onSubmit={this.onSubmit} className="formLogin">
            <h3 className="title">Login!</h3>
            <input
              className="form-group"
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <input
              className="form-group"
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <input type="submit" value="Login" />
            <button onClick={() => this.props.history.push("/")}>Cancel</button>
          </form>

          {
            this.state.loginSucces ?
              <div className="loginSuccesCont">
                <div className="loginSuccesDiv">
                  <p>You are login</p>
                  <Link to="/"><button className="buttonsHomeLink">Ok!</button></Link>
                </div></div> : null
          }

        </div>
      </div>
    )
  }
}

Login.propTypes = {
  withAuth: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  viewLogin: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { withAuth, logIn, viewLogin })(Login);
