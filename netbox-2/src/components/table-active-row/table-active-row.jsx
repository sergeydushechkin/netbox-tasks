import React from "react";
import PropTypes from "prop-types";

const TableActiveRow = (props) => {
  const {rowData, onDeleteClick} = props;

  return (
    <tr className="table__row table__row--active">
      <td className="table__cell">
        <input style={{border: `none`, outline: `none`}} className="table_input" type="text" name="id" readOnly defaultValue={rowData.id} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="text" name="name" required size="15" defaultValue={rowData.name} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="number" name="age" min="1" max="120" required defaultValue={rowData.age} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="tel" name="phone" required size="10" pattern="^((8|\+\d)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{7,10}$" defaultValue={rowData.phone} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="email" name="email" required size="15" defaultValue={rowData.email} />
      </td>
      <td className="table__cell buttons">
        <button type="submit" className="buttons__save">Сохранить</button>
        <button type="button" onClick={() => onDeleteClick(rowData.id)} className="buttons__delete">Удалить</button>
      </td>
    </tr>
  );
};


TableActiveRow.propTypes = {
  rowData: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TableActiveRow;
