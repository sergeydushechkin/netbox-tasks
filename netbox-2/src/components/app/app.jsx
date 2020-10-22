import React from "react";
import {useSelector} from "react-redux";

import {getTableData} from "../../reducer/selectors.js";

import Table from "../table/table.jsx";
import Additions from "../additions/additions.jsx";

const App = () => {
  const data = useSelector((state) => getTableData(state));

  return (
    <React.Fragment>
      <Table tableData={data}/>
      <Additions tableData={data} />
    </React.Fragment>
  );
};

export default App;
