import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionCreator, Operation} from "../../reducer/reducer.js";
import {getSortedTableData, getAddingMode} from "../../reducer/selectors.js";
import {createNewTableItem} from "../../utils.js";

import TableHeader from "../table-header/table-header.jsx";
import TableRow from "../table-row/table-row.jsx";
import TableActiveRow from "../table-active-row/table-active-row.jsx";

const Table = () => {
  const [activeRowId, setActiveRowId] = React.useState(null);
  const tableData = useSelector((state) => getSortedTableData(state));
  const addingMode = useSelector((state) => getAddingMode(state));

  const dispatch = useDispatch();

  const handleSave = (formData) => {
    dispatch(Operation.changeData(formData));
    setActiveRowId(null);
  };

  const handleSaveNew = (formData) => {
    dispatch(Operation.addData(formData));
  };

  const handleCancel = () => {
    dispatch(ActionCreator.changeAddingMode(false));
  };

  const handleEdit = (id) => {
    setActiveRowId(id);
  };

  const handleDelete = (id) => {
    dispatch(Operation.removeData(id));
  };

  useEffect(() => {
    if (addingMode && activeRowId) {
      setActiveRowId(null);
    }
  }, [addingMode, activeRowId]);

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
        {
          addingMode && <TableActiveRow rowData={createNewTableItem({id: ``, name: ``, age: ``, phone: ``, email: ``})} onDeleteClick={handleCancel} onSave={handleSaveNew}/>
        }
      </tbody>
    </table>
  );
};

export default Table;
