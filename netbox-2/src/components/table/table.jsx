import React from "react";
import PropTypes from "prop-types";

const Table = (props) => {
  const {data} = props;

  return (
    <React.Fragment>
      <table className="table">
        <tr className="table__row">
          <th className="table__header">id</th>
          <th className="table__header">name</th>
          <th className="table__header">age</th>
          <th className="table__header">phone</th>
          <th className="table__header">email</th>
          <th className="table__header">actions</th>
        </tr>
        <tr className="table__row">
          <td className="table__cell">1</td>
          <td className="table__cell">Ivan</td>
          <td className="table__cell">25</td>
          <td className="table__cell">123123</td>
          <td className="table__cell">ivan@mmmail.com</td>
          <td className="table__cell buttons">
            <button className="buttons__edit">Редактировать</button>
            <button className="buttons__delete">Удалить</button>
          </td>
        </tr>
        <tr className="table__row table__row--active">
          <td className="table__cell">2</td>
          <td className="table__cell">
            <input className="table_input" type="text" name="name" required size="15" value="Maria" />
          </td>
          <td className="table__cell">
            <input className="table_input" type="text" name="age" required size="5" value="21" />
          </td>
          <td className="table__cell">
            <input className="table_input" type="tel" name="telephone" required size="10" value="423434234" />
          </td>
          <td className="table__cell">
            <input className="table_input" type="email" name="telephone" required size="15" value="maria@mmmail.com" />
          </td>
          <td className="table__cell buttons">
            <button className="buttons__save">Сохранить</button>
            <button className="buttons__delete">Удалить</button>
          </td>
        </tr>
      </table>
      <p className="total">Total: 2</p>
    </React.Fragment>
  );
};

Table.propTypes = {
  data: PropTypes.shape.any,
};

export default Table;
