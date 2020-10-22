import {extend} from "../utils.js";
import {SortTypes} from "../const.js";

import JsonData from "../mock/data.js";

const initialState = {
  tableData: JSON.parse(JsonData),
  sortType: SortTypes.AGE_ASC,
  isAddingMode: false,
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ADDING_MODE: `CHANGE_ADDING_MODE`,
};

const ActionCreator = {
  loadData: (tableData) => ({
    type: ActionType.LOAD_DATA,
    payload: tableData
  }),
  changeSorting: (type) => ({
    type: ActionType.CHANGE_SORTING,
    payload: type
  }),
  changeAddingMode: (mode) => ({
    type: ActionType.CHANGE_ADDING_MODE,
    payload: mode
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return extend(state, {data: action.payload});
    case ActionType.CHANGE_SORTING:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_ADDING_MODE:
      return extend(state, {isAddingMode: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
