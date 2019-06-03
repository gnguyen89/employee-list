import React from 'react';
import PropTypes from 'prop-types';

import UserCard from 'components/molecules/UserCard';
import css from './userList.module.scss';

function UserList({ users, onUserChange, selectedUserId }) {
  const handleUserSelect = React.useCallback((id) => {
    onUserChange(id);
  }, [onUserChange]);

  return (
    <div className={css.userList}>
      {(users && Object.keys(users).length) && Object.keys(users).map(key => 
        <div>
          <div className={css.groupCaption}>{key}</div>
          <div className={css.list}>{users[key].map(u => <UserCard
            key={u.id}
            user={u}
            isSelected={selectedUserId === u.id}
            onClick={() => handleUserSelect(u.id)}
          />)}</div>
        </div>
      )}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.object,
  onUserChange: PropTypes.func,
  selectedUserId: PropTypes.string,
};

UserList.defaultProps = {
  onUserChange: () => {},
};

export default UserList;
