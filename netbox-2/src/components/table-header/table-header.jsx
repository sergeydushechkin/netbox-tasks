import React from "react";
// import PropTypes from "prop-types";

const TableHeader = (props) => {
  const {} = props;

  return (
    <tr className="table__row">
      <th className="table__header"><a href="">id</a></th>
      <th className="table__header"><a href="">name</a></th>
      <th className="table__header"><a href="">age</a></th>
      <th className="table__header"><a href="">phone</a></th>
      <th className="table__header"><a href="">email</a></th>
      <th className="table__header"><a href="">actions</a></th>
    </tr>
  );
};


TableHeader.propTypes = {
  // data: PropTypes.array.isRequired,
};

export default TableHeader;
