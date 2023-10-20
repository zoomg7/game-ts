import React, { ReactNode } from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

type Props = {
  onClick: () => void,
  children: ReactNode,
  fullWidth?: boolean,
}

const Button = (props: Props) => {
  const {children, onClick, fullWidth = false} = props;

  return (
    <button onClick={onClick} className={clsx(classes.root, fullWidth && classes.fullWidth)}>
      {children}
    </button>
  );
};

export default Button;