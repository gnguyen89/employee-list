import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Avatar from 'components/molecules/Avatar';

import css from './userCard.module.scss';

function UserCard({ user, isSelected, onClick }) {
  const { photoUrl, firstName, lastName, role, department } = user;
  return (
    <div className={classnames(css.userCard, { [css.selected]: isSelected })} onClick={onClick}>
      <div className={css.picture}>
        <Avatar url={photoUrl} firstName={firstName} lastName={lastName} />
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
  onClick: PropTypes.func,
}

export default UserCard;
