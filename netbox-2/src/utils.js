import {SortTypes} from "./const.js";

const extend = (firstObj, secondObj) => {
  return Object.assign({}, firstObj, secondObj);
};

const sortTableData = (tableData, sortType) => {
  let sortedTableData = [];

  switch (sortType) {
    case SortTypes.ID_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[0].value - b[0].value);
      break;
    case SortTypes.ID_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[0].value - a[0].value);
      break;
    case SortTypes.NAME_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[1].value - b[1].value);
      break;
    case SortTypes.NAME_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[1].value - a[1].value);
      break;
    case SortTypes.AGE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[2].value - b[2].value);
      break;
    case SortTypes.AGE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[2].value - a[2].value);
      break;
    case SortTypes.PHONE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[3].value - b[3].value);
      break;
    case SortTypes.PHONE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[3].value - a[3].value);
      break;
    case SortTypes.EMAIL_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[4].value - b[4].value);
      break;
    case SortTypes.EMAIL_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[4].value - a[4].value);
      break;
  }

  return sortedTableData;
};

export {extend, sortTableData};
