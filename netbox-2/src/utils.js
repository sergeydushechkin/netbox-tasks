import {SortTypes} from "./const.js";

const extend = (firstObj, secondObj) => {
  return Object.assign({}, firstObj, secondObj);
};

const sortStringsByIndex = (first, second, index) => {
  const a = first[index].value.toLowerCase();
  const b = second[index].value.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
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
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(a, b, 1));
      break;
    case SortTypes.NAME_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(b, a, 1));
      break;
    case SortTypes.AGE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a[2].value - b[2].value);
      break;
    case SortTypes.AGE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b[2].value - a[2].value);
      break;
    case SortTypes.PHONE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(a, b, 3));
      break;
    case SortTypes.PHONE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(b, a, 3));
      break;
    case SortTypes.EMAIL_ASC:
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(a, b, 4));
      break;
    case SortTypes.EMAIL_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStringsByIndex(b, a, 4));
      break;
  }

  return sortedTableData;
};

export {extend, sortTableData};
