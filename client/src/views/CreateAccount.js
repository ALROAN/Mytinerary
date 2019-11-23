import React, { useState } from "react";
import { createUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

//Material-UI
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const CreateAccount = ({ createUser, history }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [country, setCountry] = useState("")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    history.push("/")
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser({
      userName, password, email, firstName, lastName, avatar, country
    })
    setOpen(true);


  }


  return (
    <Container className="LogIn">
      <div>
        <h3>Create your new account</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label> Password: </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>First name: </label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last name: </label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Avatar: </label>
            <input
              type="text"
              className="form-control"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Country: </label>
            <input
              type="text"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
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
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">El usuario se ha creado correctamente. Bienvenido {userName}!!</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Container>
  );

}


const mapStateToProps = state => ({
});


export default connect(mapStateToProps, { createUser })(CreateAccount);
