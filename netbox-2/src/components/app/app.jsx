import React from "react";
import PropTypes from "prop-types";
import Table from "../table/table.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <Table tableData={data}/>
  );
};

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
