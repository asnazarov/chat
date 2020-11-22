import React from 'react';
import classNames from 'classnames'
import './block.scss';

const Block = ({children, className}) => {
  return (
    <div className={classNames('block', className)}>
      {children}
    </div>
  )
}

export default Block;