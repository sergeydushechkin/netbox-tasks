import {SortTypes} from "./const.js";

const extend = (firstObj, secondObj) => {
  return Object.assign({}, firstObj, secondObj);
};

const sortStrings = (first, second) => {
  const a = first.toLowerCase();
  const b = second.toLowerCase();

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
      sortedTableData = tableData.slice().sort((a, b) => a.id - b.id);
      break;
    case SortTypes.ID_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b.id - a.id);
      break;
    case SortTypes.NAME_ASC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(a.name, b.name));
      break;
    case SortTypes.NAME_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(b.name, a.name));
      break;
    case SortTypes.AGE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => a.age - b.age);
      break;
    case SortTypes.AGE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => b.age - a.age);
      break;
    case SortTypes.PHONE_ASC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(a.phone, b.phone));
      break;
    case SortTypes.PHONE_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(b.phone, a.phone));
      break;
    case SortTypes.EMAIL_ASC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(a.email, b.email));
      break;
    case SortTypes.EMAIL_DESC:
      sortedTableData = tableData.slice().sort((a, b) => sortStrings(b.email, a.email));
      break;
    default:
      sortedTableData = tableData;
      break;
  }

  return sortedTableData;
};

const createNewTableItem = ({id, name, age, phone, email}) => {
  return [
    {field: `ID`, value: id, type: `integer`},
    {field: `Name`, value: name, type: `string`},
    {field: `Age`, value: age, type: `integer`},
    {field: `Phone`, value: phone, type: `string`},
    {field: `E-mail`, value: email, type: `string`},
  ];
};

const findMaxId = (tableData) => {
  let max = 0;
  for (let item of tableData) {
    if (max < item.id) {
      max = item.id;
    }
  }
  return max;
};

const parseFormData = (formData) => {
  return {
    id: Number(formData.get(`id`)),
    name: formData.get(`name`),
    age: Number(formData.get(`age`)),
    phone: formData.get(`phone`),
    email: formData.get(`email`),
  };
};

export {extend, sortTableData, createNewTableItem, findMaxId, parseFormData};
