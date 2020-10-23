import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {SortTypes} from "../../const.js";

import {ActionCreator} from "../../reducer/reducer.js";
import {getSortType} from "../../reducer/selectors.js";

const HeaderClasses = {
  SORT_ASC: ` table__header--sort-asc`,
  SORT_DESC: ` table__header--sort-desc`,
};

const headers = [
  {title: `id`, asc: SortTypes.ID_ASC, desc: SortTypes.ID_DESC},
  {title: `name`, asc: SortTypes.NAME_ASC, desc: SortTypes.NAME_DESC},
  {title: `age`, asc: SortTypes.AGE_ASC, desc: SortTypes.AGE_DESC},
  {title: `phone`, asc: SortTypes.PHONE_ASC, desc: SortTypes.PHONE_DESC},
  {title: `email`, asc: SortTypes.EMAIL_ASC, desc: SortTypes.EMAIL_DESC},
];

const TableHeader = (props) => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => getSortType(state));
  const {} = props;

  return (
    <tr className="table__row">
      {
        headers.map((header) => {
          const {title, asc, desc} = header;
          let headerClass = ``;
          let sortBy = asc;

          if (sortType === asc) {
            headerClass = HeaderClasses.SORT_ASC;
            sortBy = desc;
          } else if (sortType === desc) {
            headerClass = HeaderClasses.SORT_DESC;
          }

          return (
            <th key={title} className={`table__header${headerClass}`}>
              <a onClick={(evt) => {
                evt.preventDefault();
                dispatch(ActionCreator.changeSorting(sortBy));
              }} href="">{title}</a>
            </th>
          );
        })
      }
      <th className="table__header">actions</th>
    </tr>
  );
};


TableHeader.propTypes = {
  // data: PropTypes.array.isRequired,
};

export default TableHeader;
