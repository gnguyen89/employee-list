import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './usercard.module.scss';

function UserCard({ user, isSelected }) {
  const { photoUrl, firstName, lastName, role, department } = user;
  return (
    <div className={classnames(css.userCard, { [css.selected]: isSelected })}>
      <div className={css.picture}>
        {photoUrl ? <img src={photoUrl} alt="profile-pic" /> : <div className={css.initials}>{`${firstName.charAt(0)} ${lastName.charAt(0)}`}</div>}
      </div>
      <div className={css.details}>
        <div className={css.name}>{firstName} {lastName}</div>
        <div className={css.role}>{role}</div>
        <div className={css.department}>{department}</div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  isSelected: PropTypes.bool,
  user: PropTypes.object,
}

export default UserCard;
