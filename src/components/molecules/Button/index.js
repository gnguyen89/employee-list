import React from 'react';

import BootstrapButton from 'react-bootstrap/Button';

function Button(props) {
  const { children, ...otherProps } = props;
  return (
    <BootstrapButton {...otherProps}>
      {children}
    </BootstrapButton>
  );
}

export default Button;
