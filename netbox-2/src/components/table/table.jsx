import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionCreator, Operation} from "../../reducer/reducer.js";
import {getSortedTableData, getAddingMode} from "../../reducer/selectors.js";
import {createNewTableItem, parseFormData} from "../../utils.js";

import TableHeader from "../table-header/table-header.jsx";
import TableRow from "../table-row/table-row.jsx";
import TableActiveRow from "../table-active-row/table-active-row.jsx";

const Table = () => {
  const [activeRowId, setActiveRowId] = React.useState(null);
  const tableData = useSelector((state) => getSortedTableData(state));
  const addingMode = useSelector((state) => getAddingMode(state));
  const formRef = React.useRef();

  const dispatch = useDispatch();

  const handleCancel = React.useCallback(() => {
    dispatch(ActionCreator.changeAddingMode(false));
  }, [dispatch]);

  const handleEdit = React.useCallback((id) => {
    setActiveRowId(id);
  }, []);

  const handleDelete = React.useCallback(((id) => {
    dispatch(Operation.removeData(id));
  }), [dispatch]);

  const handleSubmit = React.useCallback((evt) => {
    evt.preventDefault();
    const data = parseFormData(new FormData(formRef.current));

    if (addingMode) {
      dispatch(Operation.addData(data));
    } else {
      dispatch(Operation.changeData(data))
        .then(() => {
      setActiveRowId(null);
        });
    }
  }, [dispatch, addingMode]);

  React.useEffect(() => {
    if (addingMode && activeRowId) {
      setActiveRowId(null);
    }
  }, [addingMode, activeRowId]);

  return (
    <form onSubmit={handleSubmit} method="post" action="#" ref={formRef}>
      <table className="table">
        <tbody>
          <TableHeader />
          {
            tableData.map((item) => {
              const id = item[0].value;
              return id === activeRowId
                ? <TableActiveRow key={id} rowData={item} onDeleteClick={handleDelete}/>
                : <TableRow key={id} rowData={item} onEditClick={handleEdit} onDeleteClick={handleDelete}/>;
            })
          }
          {
            addingMode && <TableActiveRow rowData={createNewTableItem({id: ``, name: ``, age: ``, phone: ``, email: ``})} onDeleteClick={handleCancel}/>
          }
        </tbody>
      </table>
    </form>
  );
};

export default Table;
