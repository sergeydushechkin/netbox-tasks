import React from "react";
import {useSelector} from "react-redux";

import {getTableData} from "../../reducer/selectors.js";

const Total = () => {
  const value = useSelector((state) => getTableData(state));

  return (
    <p className="additions__total">Total: {value.length}</p>
  );
};

export default Total;
