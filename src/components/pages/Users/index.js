import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import logo from 'img/affinityid-logo.svg';
import Button from 'components/molecules/Button';
import Searchbox from 'components/molecules/Searchbox';
import UserList from 'components/organisms/UserList';
import UserProfile from 'components/organisms/UserProfile';

import mockUsers from 'services/mockUsers';

import css from './user.module.scss';

function Users({ match, history }) {
  console.log(match);
  const { params, path } = match;
  return (
    <div className={css.usersPage}>
      <div className={css.header}>
        <img src={logo} alt="logo" />
        <Button variant="dark">Create a new employee</Button>
      </div>
      <div className={css.content}>
        <div className={css.list}>
          <Searchbox />
          <UserList users={mockUsers} />
          <Link to={`${path}/test`}>My profile</Link>
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

Users.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default Users;
