import React from 'react';
import PropTypes from 'prop-types';

import css from './userprofile.module.scss';

function UserProfile({ user }) {
  return (
    user
    ? <div className={css.userProfile}>
      {user.firstName} {user.lastName}
    </div>
    : <div>No user selected</div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object,
};

export default UserProfile;
