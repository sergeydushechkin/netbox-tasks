import React from "react";
import PropTypes from "prop-types";
import Table from "../table/table.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <Table data={data}/>
  );
};


App.propTypes = {
  data: PropTypes.shape.any,
};

export default App;
