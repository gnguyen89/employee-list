import * as actions from './actions'
import * as types from './actionTypes'

describe('actions', () => {
  it('should create an action to add a user', () => {
    const user = {};
    const expectedAction = {
      type: types.ADD_USER,
      payload: user
    }
    expect(actions.addUserSuccess(user)).toEqual(expectedAction)
  })

  it('should create an action to edit a user', () => {
    const user = {};
    const expectedAction = {
      type: types.EDIT_USER,
      payload: user
    }
    expect(actions.editUserSuccess(user)).toEqual(expectedAction)
  })

  it('should create an action to delete a user', () => {
    const user = {};
    const expectedAction = {
      type: types.DELETE_USER,
      payload: user
    }
    expect(actions.deleteUserSuccess(user)).toEqual(expectedAction)
  })
})