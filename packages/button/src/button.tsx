import { yoru } from '@yoru-ui/system';
import React from 'react';
import { useGetThemes, useGetVariants } from '@yoru-ui/themes';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export const Button: React.FC<ButtonProps> = props => {
  const { variant = 'primary', children } = props;

  const styledButton = useGetThemes('Button');

  const variants = useGetVariants('Button', variant);

  const buttonStyles: React.CSSProperties = {
    ...styledButton.baseStyle,
    background: variant ? variants.backgroundColor : '#f3f4f6',
    color: variant ? variants.color : '#1F0101',
  };

  return (
    <yoru.button
      type="button"
      __style={buttonStyles}
      className={`yoru-button yoru-button--${variant}`}
      {...props}
    >
      {children}
    </yoru.button>
  );
};
