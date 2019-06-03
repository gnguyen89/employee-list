import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BootstrapButton from 'react-bootstrap/Button';

import css from './button.module.scss';

function Button(props) {
  const { children, className, ...otherProps } = props;
  return (
    <BootstrapButton className={classnames(css.button, className)} {...otherProps}>
      {children}
    </BootstrapButton>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}

export default Button;
