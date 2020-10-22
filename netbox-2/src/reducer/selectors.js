import {createSelector} from "reselect";

import {sortTableData} from "../utils.js";

const getTableData = (state) => {
  return state.tableData;
};

const getSortType = (state) => {
  return state.sortType;
};

const getAddingMode = (state) => {
  return state.isAddingMode;
};

const getSortedTableData = createSelector(
    getTableData,
    getSortType,
    (tableData, sortType) => sortTableData(tableData, sortType)
);

export {
  getTableData,
  getSortType,
  getAddingMode,
  getSortedTableData,
};
