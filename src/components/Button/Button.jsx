import React from 'react';
import classNames from 'classnames';
import {Button as BaseButton} from 'antd';
import './button.scss';

const Button = props => {
  console.log(props)
  return (
      <BaseButton {...props} className={classNames('button',
        props.className,
        {'button__large': props.size === 'large'}
        )} />
  )
}

export default Button;