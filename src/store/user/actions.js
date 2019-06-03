import { ADD_USER, EDIT_USER, FETCH_USERS, DELETE_USER } from "./actionTypes";

import userService from 'services/userService';


export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS,
  payload,
});

export const addUserSuccess = payload => ({
  type: ADD_USER,
  payload,
});

export const editUserSuccess = payload => ({
  type: EDIT_USER,
  payload,
});

export const deleteUserSuccess = payload => ({
  type: DELETE_USER,
  payload,
});

// side effects

export function fetchUsers() {
  return async (dispatch) => {
    const users = await userService.fetchUsers();
    dispatch(fetchUsersSuccess(users));
  };
}

export function addUser(user) {
  return async (dispatch) => {
    dispatch(addUserSuccess(user));
  };
}

export function editUser(user) {
  return async (dispatch) => {
    dispatch(editUserSuccess(user));
  };
}

export function deleteUser(user) {
  return async (dispatch) => {
    dispatch(deleteUserSuccess(user));
  };
}