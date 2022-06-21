import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

export enum ButtonVariant {
  Icon = 'icon',
  Text = 'text',
  Secondary = 'secondary',
}

export enum ButtonSize {
  Small = 'small',
  Big = 'big',
  Wide = 'wide',
}

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  variant?: string[];
  size?: string;
  onClick?: (...params: any) => void;
  to?: string;
};

const Button = ({
  children,
  className,
  isDisabled,
  isActive,
  variant = [],
  size = ButtonSize.Small,
  onClick,
  to,
  ...attrs
}: ButtonProps): JSX.Element => {
  const classes = cn(
    styles.button,
    variant.map((variant) => styles[variant]),
    styles[size],
    className,
    { isActive },
  );
  if (to) {
    return (
      <Link className={classes} onClick={onClick} to={to} {...attrs}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
