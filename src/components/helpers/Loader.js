import React from "react";
import PropTypes from "prop-types";

const Loader = ({ color }) => (
  <div className={`spinner ${color} smaller inline-spinner`}>
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
);

Loader.defaultProps = {
  color: "Blue",
  fontSize: "15px",
};

Loader.propTypes = {
  color: PropTypes.string,
};

export default Loader;
