import React from "react";
import PropTypes from "prop-types";

import Total from "../total/total.jsx";
import NewButton from "../new-button/new-button.jsx";

const Additions = (props) => {
  const {tableData} = props;

  return (
    <div className="additions">
      <Total value={tableData.length}/>
      <NewButton />
    </div>
  );
};

Additions.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default Additions;
