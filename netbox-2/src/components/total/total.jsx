import React from "react";
import PropTypes from "prop-types";

const Total = (props) => {
  const {value} = props;
  return (
    <p className="total">Total: {value}</p>
  );
};

Total.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Total;