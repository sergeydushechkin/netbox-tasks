import React from "react";
import PropTypes from "prop-types";

const ErrorStatus = (props) => {
  const {errorText} = props;

  return (
    <p className="table__error">{errorText}</p>
  );
};

ErrorStatus.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorStatus;
