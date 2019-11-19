import React from "react";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js";
// const responseFacebook = response => {
//   console.log(response);
// };

// const responseGoogle = response => {
//   let googleData;
//   googleData = {
//     googleID: response.profileObj.googleId,
//     email: response.profileObj.email,
//     password: "",
//     username: response.profileObj.name,
//     firstname: response.profileObj.givenName,
//     lastname: response.profileObj.familyName,
//     avatar: response.profileObj.imageUrl,
//     accesstoken: response.accessToken
//   };
//   this.props.socialRegisterUser(googleData);
// };

class LogIn extends React.Component {
  // constructor() {
  //   super();

  //   this.onFailed = this.onFailed.bind(this);
  //   this.onSuccess = this.onSuccess.bind(this);
  // }

  // onSuccess(response) {
  //   response.json().then(body => {
  //     alert(JSON.stringify(body));
  //   });
  // }

  // onFailed(error) {
  //   alert(error);
  // }

  render() {
    // const customHeader = {};
    // customHeader["Test"] = "test-header";
    return (
      <div className="LogIn">
        <div>
          <h3>Create your new account</h3>
          <form>
            <div className="form-group">
              <label>Add Person Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Add Business Name: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Add GST Number: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Crate Account"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <div>
          {/* <TwitterLogin
            loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
            showIcon={true}
            customHeaders={customHeader}
            forceLogin={true}
          />

          <TwitterLogin
            loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
            showIcon={true}
            customHeaders={customHeader}
          >
            <b>Custom</b> Twitter <i>Login</i> content
          </TwitterLogin>
        </div>
        <div>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad
            callback={responseFacebook}
            render={renderProps => (
              <button onClick={renderProps.onClick}>
                This is my custom FB button
              </button>
            )}
          />
        </div>
        <div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </div>
      </div>
    );
  }
}

export default LogIn;
