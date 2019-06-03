import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './avatar.module.scss';

function Avatar({ className, large, url, firstName, lastName }) {
  return (
    <div className={classnames(css.picture, className, { [css.large]: large })}>
      {url ? <img src={url} alt="profile-pic" /> : <div className={css.initials}>{`${firstName && firstName.charAt(0)} ${lastName && lastName.charAt(0)}`}</div>}
    </div>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  large: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default Avatar;
