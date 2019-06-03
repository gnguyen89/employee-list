import React from 'react';

import css from './searchBox.module.scss';

function Searchbox(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.label}>Search:</div>
      <input className={css.searchbox} type="text" placeholder="type a name" onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}

export default Searchbox;
