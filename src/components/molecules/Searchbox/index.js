import React from 'react';

import css from './searchbox.module.scss';

function Searchbox(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.label}>Search:</div>
      <input className={css.searchbox} type="text" placeholder="type a name" />
    </div>
  );
}

export default Searchbox;
