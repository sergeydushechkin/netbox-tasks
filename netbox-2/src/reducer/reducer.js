import {extend, createNewTableItem, findMaxId} from "../utils.js";
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
  })
};

const Operation = {
  changeData: (newData) => (dispatch, getState, api) => {
    const stateData = getState().tableData;
    const index = stateData.findIndex((it) => it[0].value === newData.id);
    const newStateData = [].concat([...stateData.slice(0, index)], [createNewTableItem(newData)], [...stateData.slice(index + 1, stateData.length)]);
    dispatch(ActionCreator.loadData(newStateData));
  },
  addData: (newData) => (dispatch, getState, api) => {
    const stateData = getState().tableData;
    newData.id = findMaxId(stateData) + 1;
    const newStateData = [].concat([...stateData.slice()], [createNewTableItem(newData)]);
    dispatch(ActionCreator.changeAddingMode(false));
    dispatch(ActionCreator.loadData(newStateData));
  },
  removeData: (id) => (dispatch, getState, api) => {
    const newStateData = getState().tableData.filter((it) => it[0].value !== id);
    dispatch(ActionCreator.loadData(newStateData));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return extend(state, {tableData: action.payload});
    case ActionType.CHANGE_SORTING:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_ADDING_MODE:
      return extend(state, {isAddingMode: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
