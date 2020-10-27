import React from "react";
import PropTypes from "prop-types";

const TableActiveRow = (props) => {
  const {rowData, onDeleteClick} = props;

  return (
    <tr className="table__row table__row--active">
      <td className="table__cell">
        <input style={{border: `none`, outline: `none`}} className="table_input" type="text" name="id" readOnly defaultValue={rowData[0].value} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="text" name="name" required size="15" defaultValue={rowData[1].value} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="number" name="age" min="1" max="120" required defaultValue={rowData[2].value} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="tel" name="phone" required size="10" pattern="^((8|\+\d)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{7,10}$" defaultValue={rowData[3].value} />
      </td>
      <td className="table__cell">
        <input className="table_input" type="email" name="email" required size="15" defaultValue={rowData[4].value} />
      </td>
      <td className="table__cell buttons">
        <button type="submit" className="buttons__save">Сохранить</button>
        <button type="button" onClick={() => onDeleteClick(rowData[0].value)} className="buttons__delete">Удалить</button>
      </td>
    </tr>
  );
};


TableActiveRow.propTypes = {
  rowData: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TableActiveRow;
