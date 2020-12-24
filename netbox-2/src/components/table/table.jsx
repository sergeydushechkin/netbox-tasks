import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionCreator, Operation} from "../../reducer/reducer.js";
import {getSortedTableData, getAddingMode} from "../../reducer/selectors.js";
import {parseFormData} from "../../utils.js";

import TableHeader from "../table-header/table-header.jsx";
import TableRow from "../table-row/table-row.jsx";
import TableActiveRow from "../table-active-row/table-active-row.jsx";
import ErrorStatus from "../error-status/error-status.jsx";

const ESC_KEY = 27;
const ERROR_SHOWTIME = 3000;

const Table = () => {
  const [activeRowId, setActiveRowId] = React.useState(null);
  const tableData = useSelector((state) => getSortedTableData(state));
  const addingMode = useSelector((state) => getAddingMode(state));
  const [error, setError] = React.useState(` `);
  const formRef = React.useRef();

  const dispatch = useDispatch();

  const showError = React.useCallback((err) => {
    setError(String(err));
    setTimeout(() => {
      setError(``);
    }, ERROR_SHOWTIME);
  }, []);

  const handleCancel = React.useCallback(() => {
    dispatch(ActionCreator.changeAddingMode(false));
  }, [dispatch]);

  const handleEdit = React.useCallback((id) => {
    setActiveRowId(id);
  }, []);

  const handleDelete = React.useCallback(((id) => {
    dispatch(Operation.removeData(id)).catch(showError);
  }), [dispatch, showError]);

  const handleSubmit = React.useCallback((evt) => {
    evt.preventDefault();
    const data = parseFormData(new FormData(formRef.current));

    if (addingMode) {
      dispatch(Operation.addData(data)).catch(showError);
    } else {
      dispatch(Operation.changeData(data))
        .then(() => {
          setActiveRowId(null);
        })
        .catch(showError);
    }
  }, [dispatch, addingMode, showError]);

  React.useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.keyCode === ESC_KEY) {
        if (addingMode) {
          dispatch(ActionCreator.changeAddingMode(false));
        }
        if (activeRowId) {
          setActiveRowId(null);
        }
      }
    };

    if (addingMode && activeRowId) {
      setActiveRowId(null);
    }

    if (addingMode || activeRowId) {
      document.addEventListener(`keydown`, handleEsc, false);
    } else {
      document.removeEventListener(`keydown`, handleEsc, false);
    }

    return () => {
      document.removeEventListener(`keydown`, handleEsc, false);
    };
  }, [addingMode, activeRowId, dispatch]);

  return (
    <form onSubmit={handleSubmit} method="post" action="#" ref={formRef}>
      <table className="table">
        <tbody>
          <TableHeader />
          {
            tableData.map((item) => {
              const id = item.id;
              return id === activeRowId
                ? <TableActiveRow key={id} rowData={item} onDeleteClick={handleDelete}/>
                : <TableRow key={id} rowData={item} onEditClick={handleEdit} onDeleteClick={handleDelete}/>;
            })
          }
          {
            addingMode && <TableActiveRow rowData={{id: ``, name: `asdas`, age: ``, phone: ``, email: ``}} onDeleteClick={handleCancel}/>
          }
        </tbody>
      </table>
      <ErrorStatus errorText={error} />
    </form>
  );
};

export default Table;
