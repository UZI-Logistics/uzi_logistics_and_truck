import React from "react";
import PropTypes from "prop-types";
// import loader from "../../images/wait.gif"

const Loader = ({ color }) => (
  <div className={`spinner ${color} smaller inline-spinner`}>
    {/* <img src={loader} alt="google-map" /> */}
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
);

Loader.defaultProps = {
  color: "green",
  fontSize: "3500px",

};

Loader.propTypes = {
  color: PropTypes.string,
};

export default Loader;
