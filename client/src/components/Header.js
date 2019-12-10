import React, { useEffect, useState } from "react";
import { connect } from "react-redux";


const Header = ({ user }) => {

  useEffect(() => {
    if (user) {
    }

  });


  return (

    <div className="headerContainer"><p>{user.userName}</p></div>
  );

}



const mapStateToProps = state => ({
  user: state.user.payload
});

export default connect(mapStateToProps)(Header);
