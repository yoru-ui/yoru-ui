import { yoru } from '@yoru-ui/system';
import React from 'react';
import { useGetThemes, useGetVariants } from '@yoru-ui/themes';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger';
}

export const Button: React.FC<ButtonProps> = props => {
  const { variant = 'default', children } = props;

  const styledButton = useGetThemes('Button');

  const variants = useGetVariants('Button', variant);

  const buttonStyles: React.CSSProperties = {
    ...styledButton.baseStyle,
    ...variants,
  };

  return (
    <yoru.button type="button" __style={buttonStyles} className="yoru-button" {...props}>
      {children}
    </yoru.button>
  );
};
