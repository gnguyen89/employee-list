import { createSelector } from 'reselect';

export const userStore = state => state.user;

export const getAllUsers = createSelector(
  userStore,
  userStore => userStore.users,
);

export const getUserById = (id) => createSelector(
  getAllUsers,
  (users) => {
    return users.find(u => u.id === id);
    // return users.toList()
    //   .filter(application => application.get('userId') === userId)
    //   .sort((a, b) => a.get('order') - b.get('order'))
    //   .toJS();
  },
);
