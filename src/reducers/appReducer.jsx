import {
  SET_LOADING,
  SET_CHARACTERS_DATA,
  SET_SEARCH_KEY,
} from "../actions/App.js";

const initialState = {
  characters: [],
  isLoading: true,
  searchKey: "",
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHARACTERS_DATA:
      return {
        ...state,
        characters: [...payload],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload,
      };
    default:
      return state;
  }
};

export { AppReducer };
