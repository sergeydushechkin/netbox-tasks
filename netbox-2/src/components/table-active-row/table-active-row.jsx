import React from "react";
import PropTypes from "prop-types";

const TableActiveRow = (props) => {
  const {rowData, onDeleteClick, onSave} = props;
  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const telRef = React.useRef();
  const emailRef = React.useRef();

  const handleSaveClick = () => {
    const formData = {
      id: rowData[0].value,
      name: nameRef.current.value,
      age: ageRef.current.value,
      phone: telRef.current.value,
      email: emailRef.current.value
    };

    onSave(formData);
  };

  return (
    <tr className="table__row table__row--active">
      <td className="table__cell">{rowData[0].value}</td>
      <td className="table__cell">
        <input ref={nameRef} className="table_input" type="text" name="name" required size="15" defaultValue={rowData[1].value} />
      </td>
      <td className="table__cell">
        <input ref={ageRef} className="table_input" type="number" name="age" min="1" max="120" required defaultValue={rowData[2].value} />
      </td>
      <td className="table__cell">
        <input ref={telRef} className="table_input" type="tel" name="telephone" required size="10" defaultValue={rowData[3].value} />
      </td>
      <td className="table__cell">
        <input ref={emailRef} className="table_input" type="email" name="email" required size="15" defaultValue={rowData[4].value} />
      </td>
      <td className="table__cell buttons">
        <button onClick={() => handleSaveClick()} className="buttons__save">Сохранить</button>
        <button onClick={() => onDeleteClick(rowData[0].value)} className="buttons__delete">Удалить</button>
      </td>
    </tr>
  );
};


TableActiveRow.propTypes = {
  rowData: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default TableActiveRow;
