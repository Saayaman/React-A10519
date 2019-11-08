import React from 'react';
import cx from 'classnames';

function ClassnameComp({ isCurrentPage, isThemeDark }) {
  return (
    <div className={cx('Header', {
      'Header-active': isCurrentPage,
      'Header-dark': isThemeDark
    })}>Title</div>
  )
}

export default ClassnameComp;