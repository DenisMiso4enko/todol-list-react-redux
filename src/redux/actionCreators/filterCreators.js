import { SET_FILTER } from "../actionTypes/filterTypes";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
