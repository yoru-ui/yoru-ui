import React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';

type ButtonThemeProps = {
  variants?: 'solid' | 'outline' | 'ghost' | 'link';
  colorScheme?: 'default' | 'primary' | 'secondary' | 'danger';
  sizes?: 'sm' | 'md' | 'lg';
};
export interface ButtonDefaultProps extends ButtonThemeProps {
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonDefaultProps> = props => {
  const {
    colorScheme = 'default',
    sizes = 'md',
    block = false,
    variants = 'solid',
    className,
    children,
  } = props;

  const ButtonTheme: ButtonThemeProps = {
    colorScheme,
    sizes,
    variants,
  };

  const buttonStyled = useResolvedThemes('Button', ButtonTheme as any);

  const buttonStyles = () => {
    return {
      ...buttonStyled,
      width: block ? '100%' : 'auto',
    };
  };

  const classes = (...classNames: any[]) => classNames.filter(Boolean).join(' ');

  return (
    <yoru.button type="button" __style={buttonStyles} className={classes('yoru-button', className)}>
      {children}
    </yoru.button>
  );
};
