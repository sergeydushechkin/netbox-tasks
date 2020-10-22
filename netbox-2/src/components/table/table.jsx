import React from "react";
import PropTypes from "prop-types";

import TableHeader from "../table-header/table-header.jsx";
import TableRow from "../table-row/table-row.jsx";
import TableActiveRow from "../table-active-row/table-active-row.jsx";
import Total from "../total/total.jsx";

const Table = (props) => {
  const {tableData} = props;
  const [activeRowId, setActiveRowId] = React.useState(2);

  const handleSave = (formData) => {
    console.log(formData);
  };

  const handleCancel = () => {
    setActiveRowId(null);
  };

  const handleEdit = (id) => {
    setActiveRowId(id);
  };

  const handleDelete = (id) => {
    console.log(`${id} deleted`);
  };

  return (
    <React.Fragment>
      <table className="table">
        <tbody>
          <TableHeader />
          {
            tableData.map((item) => {
              const id = item[0].value;
              return id === activeRowId
                ? <TableActiveRow key={id} rowData={item} onCancelClick={handleCancel} onSave={handleSave}/>
                : <TableRow key={id} rowData={item} onEditClick={handleEdit} onDeleteClick={handleDelete}/>;
            })
          }
        </tbody>
      </table>
      <Total value={tableData.length}/>
    </React.Fragment>
  );
};

Table.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default Table;
