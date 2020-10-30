import createTableData from "../adapters/table-data.js";
import {HttpCodes} from "../const.js";
import {extend, createNewTableItem, findMaxId} from "../utils.js";
// import {SortTypes} from "../const.js";

// import JsonData from "../mock/data.js";

const initialState = {
  // tableData: JSON.parse(JsonData),
  tableData: [],
  sortType: null,
  isAddingMode: false,
};

const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  CHANGE_ADDING_MODE: `CHANGE_ADDING_MODE`,
};

const ActionCreator = {
  loadData: (loadedData) => ({
    type: ActionType.LOAD_DATA,
    payload: loadedData
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
  getData: () => (dispatch, getState, api) => {
    return api.get()
      .then((response) => {
        dispatch(ActionCreator.loadData(response.data));
      });
  },
  changeData: (newData) => (dispatch, getState, api) => {
    const {id, name, age, phone, email} = newData;
    const request = `method=update&id=${id}&name=${name}&age=${age}&phone=${phone}&email=${email}`;
    return api.post(``, request)
      .then((response) => {
        if (response.status === HttpCodes.OK) {
          const stateData = getState().tableData;
          const index = stateData.findIndex((it) => it[0].value === newData.id);
          const newStateData = [].concat([...stateData.slice(0, index)], [createNewTableItem(newData)], [...stateData.slice(index + 1, stateData.length)]);
          dispatch(ActionCreator.loadData(newStateData));
        }
      });
  },
  addData: (newData) => (dispatch, getState, api) => {
    const {name, age, phone, email} = newData;
    const request = `method=add&name=${name}&age=${age}&phone=${phone}&email=${email}`;
    return api.post(``, request)
      .then((response) => {
        if (response.status === HttpCodes.OK) {
          const stateData = getState().tableData;
          newData.id = findMaxId(stateData) + 1;
          const newStateData = [].concat([...stateData.slice()], [createNewTableItem(newData)]);
          dispatch(ActionCreator.changeAddingMode(false));
          dispatch(ActionCreator.loadData(newStateData));
        }
      });
  },
  removeData: (id) => (dispatch, getState, api) => {
    return api.post(``, `method=delete&id=${id}`)
      .then((response) => {
        if (response.status === HttpCodes.OK) {
          const newStateData = getState().tableData.filter((it) => it[0].value !== id);
          dispatch(ActionCreator.loadData(newStateData));
        }
      });
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
