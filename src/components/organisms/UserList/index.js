import React from 'react';
import PropTypes from 'prop-types';

import UserCard from 'components/molecules/UserCard';
import css from './userlist.module.scss';

function UserList({ users }) {
  return (
    <div className={css.userList}>
      {(users && users.length) && users.map(u => <UserCard user={u} />)}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
