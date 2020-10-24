import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {Operation} from "../../reducer/reducer.js";
import {getSortedTableData} from "../../reducer/selectors.js";

import TableHeader from "../table-header/table-header.jsx";
import TableRow from "../table-row/table-row.jsx";
import TableActiveRow from "../table-active-row/table-active-row.jsx";


const Table = () => {
  const [activeRowId, setActiveRowId] = React.useState(2);
  const tableData = useSelector((state) => getSortedTableData(state));

  const dispatch = useDispatch();

  const handleSave = (formData) => {
    dispatch(Operation.changeData(formData));
    setActiveRowId(null);
  };

  const handleCancel = () => {
    setActiveRowId(null);
  };

  const handleEdit = (id) => {
    setActiveRowId(id);
  };

  const handleDelete = (id) => {
    dispatch(Operation.removeData(id));
  };

  return (
    <table className="table">
      <tbody>
        <TableHeader />
        {
          tableData.map((item) => {
            const id = item[0].value;
            return id === activeRowId
              ? <TableActiveRow key={id} rowData={item} onDeleteClick={handleDelete} onSave={handleSave}/>
              : <TableRow key={id} rowData={item} onEditClick={handleEdit} onDeleteClick={handleDelete}/>;
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
