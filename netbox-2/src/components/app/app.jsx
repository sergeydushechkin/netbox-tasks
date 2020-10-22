import React from "react";
import PropTypes from "prop-types";
import Table from "../table/table.jsx";
import Additions from "../additions/additions.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <React.Fragment>
    <Table tableData={data}/>
      <Additions tableData={data} />
    </React.Fragment>
  );
};

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default App;
