import {
  FETCH_USER_DATA,
  FETCH_SUBLET_DATA,
  FETCH_OWNER_DATA,
  NEW_DATA,
} from "../actions/types";

export default function (state = initialState, action) {
  const initialState = {};
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
    case FETCH_SUBLET_DATA:
      return {
        ...state,
        Sublets: action.Sublets,
      };
    case FETCH_OWNER_DATA:
      return {
        ...state,
        Owners: action.Owners,
      };
    case NEW_DATA:
      let newDataUpdate = {};
      newDataUpdate[action.table] = state[action.table]
        ? [...state[action.table], action.newData]
        : [action.newData];
      console.log(newDataUpdate);
      return {
        ...state,
        ...newDataUpdate,
      };

    default:
      return state;
  }
}
