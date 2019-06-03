import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './buttonIcon.module.scss';

function ButtonIcon({ icon, className, iconClass, onClick }) {
  return (
    <div className={classnames(css.buttonIcon, className)} onClick={onClick}><FontAwesomeIcon className={iconClass} icon={icon} /></div>
  );
}

ButtonIcon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonIcon;