import React from "react";
import PropTypes from "prop-types";

const TableRow = (props) => {
  const {rowData, onEditClick, onDeleteClick} = props;
  const id = rowData.id;

  return (
    <tr className="table__row">
      <td className="table__cell">{id}</td>
      <td className="table__cell">{rowData.name}</td>
      <td className="table__cell">{rowData.age}</td>
      <td className="table__cell">{rowData.phone}</td>
      <td className="table__cell">{rowData.email}</td>
      <td className="table__cell buttons">
        <button type="button" onClick={() => onEditClick(id)} className="buttons__edit">Редактировать</button>
        <button type="button" onClick={() => onDeleteClick(id)} className="buttons__delete">Удалить</button>
      </td>
    </tr>
  );
};


TableRow.propTypes = {
  rowData: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TableRow;
