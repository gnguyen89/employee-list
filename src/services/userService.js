import mockUsers from './mockUsers';

const fetchUsers = () => {
  return Promise.resolve(mockUsers);
};

export default {
  fetchUsers,
};