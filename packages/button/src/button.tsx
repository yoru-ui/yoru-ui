import React from 'react';
import { yoru } from '@yoru-ui/system';
import { useGetThemes, useGetColorScheme, useGetSizes } from '@yoru-ui/themes';

export interface ButtonDefaultProps {
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  colorScheme?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonDefaultProps> = props => {
  const { colorScheme = 'default', size = 'md', block = false, className, children } = props;

  // controll button baseStyle
  const styledButton = useGetThemes('Button');

  // controll button colorscheme
  const buttonColors = useGetColorScheme('Button', colorScheme);

  // controll button size
  const buttonSize = useGetSizes('Button', size);

  const buttonStyles: React.CSSProperties = {
    ...styledButton.baseStyle,
    ...buttonColors,
    ...buttonSize,
    width: block ? '100%' : 'auto',
  };

  const classes = (...classNames: any[]) => classNames.filter(Boolean).join(' ');

  return (
    <yoru.button type="button" __style={buttonStyles} className={classes('yoru-button', className)}>
      {children}
    </yoru.button>
  );
};
