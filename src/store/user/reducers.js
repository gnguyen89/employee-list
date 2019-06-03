import { ADD_USER, EDIT_USER, FETCH_USERS, DELETE_USER } from "./actionTypes";

const initialState = {
  users: [],
  selected: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        users: action.payload,
      }
    }
    case ADD_USER: {
      const newEntry = Object.assign({}, { id: String(state.users.length+1) }, action.payload);

      return {
        ...state,
        users: [...state.users, newEntry],
      }
    }
    case EDIT_USER: {
      const indexToUpdate = state.users.findIndex(u => u.id === action.payload.id);
      state.users[indexToUpdate] = action.payload;
      return {
        ...state,
        users: [...state.users],
      }
    }
    case DELETE_USER: {
      const indexToRemove = state.users.findIndex(u => u.id === action.payload.id);
      state.users.splice(indexToRemove, 1);
      return {
        ...state,
        users: [...state.users],
      }
    }
    default:
      return state;
  }
}
