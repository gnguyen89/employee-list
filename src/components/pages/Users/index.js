import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import { fetchUsers } from 'store/user/actions';
import { getAllUsers } from 'store/user/selectors';

import logo from 'img/affinityid-logo.svg';
import Button from 'components/molecules/Button';
import Searchbox from 'components/molecules/Searchbox';
import Spinner from 'components/molecules/Spinner';

import UserList from 'components/organisms/UserList';
import UserProfile from 'components/organisms/UserProfile';
import EditUser from 'components/organisms/EditUser';

import css from './user.module.scss';

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('Link copied');
  }, function() {
    alert('Could not copy');
  });
}

function Users({ match, history, fetchUsers, users }) {
  const { params: { userId } } = match;
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [isListLoad, setListLoad] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);
  const [isCreate, setIsCreate] = React.useState(false);
  const [usersState, setUsersState] = React.useState([]);

  const viewProfile = React.useCallback((id) => {
    setIsEdit(false);
    setSelectedUserId(id);
    history.push(`/users/${id}`);
  }, [history]);

  const handleCreateClick = React.useCallback(() => {
    setIsEdit(true);
    setIsCreate(true);
    setSelectedUserId(null);
    history.push(`/users/new`);
  }, [history]);

  const handleEditClick = React.useCallback((id) => {
    setIsEdit(true);
    setIsCreate(false);
    history.push(`/users/${id}/edit`);
  }, [history]);

  const handleCancelEdit = React.useCallback((id) => {
    setIsEdit(false);
    history.push(`/users/${id}`);
  }, [history]);

  const handleSearch = React.useCallback((keyword) => {
    const filtered = users.filter(u => {
      if (u.name.toLowerCase().indexOf(keyword) !== -1) {
        return true;
      }
      return false;
    })
    setUsersState(filtered);
  }, [users]);

  React.useEffect(() => {
    async function fetchUsersAsync() {
      setListLoad(true);
      await fetchUsers();
      setListLoad(false);

      if (userId !== null) {
        setSelectedUserId(userId);
      }
    }
    fetchUsersAsync();
  }, [fetchUsers]);

  React.useEffect(() => {
    setUsersState(users);
  }, [users]);

  return (
    <div className={css.usersPage}>
      <div className={css.header}>
        <img src={logo} alt="logo" />
        <Button onClick={() => handleCreateClick()} variant="dark">Create a new employee</Button>
      </div>
      <div className={css.content}>
        <div className={css.list}>
          <Searchbox onChange={(keyword) => handleSearch(keyword)} />
          {isListLoad ? <Spinner animation="border" variant="secondary" /> : <UserList selectedUserId={selectedUserId} users={groupBy(usersState, 'role')} onUserChange={viewProfile} />}
        </div>
        <div>
          {isEdit ? <EditUser userId={selectedUserId} isCreate={isCreate} onCancel={() => handleCancelEdit(selectedUserId)} /> : <UserProfile userId={selectedUserId} onEdit={() => handleEditClick(selectedUserId)} onShare={() => copyTextToClipboard(`${window.location.origin}${window.location.pathname}`)} />}
        </div>
      </div>
    </div>
  );
}

Users.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  users: getAllUsers(state),
});


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
