import React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import LoadingIcon from './LoadingIcon';
import { AnchorButtonProps, ButtonProps, NativeButtonProps } from './button.interface';

export const Button: React.FC<ButtonProps> = props => {
  const {
    variants = 'solid',
    colorScheme = 'gray',
    sizes = 'md',
    block = false,
    className,
    children,
    icon,
    iconPosition = 'left',
    loading = false,
    disabled,
    ...rest
  } = props;

  const buttonStyled = useResolvedThemes('Button', {
    variants,
    sizes,
    colorScheme,
  });

  const classes = (...classNames: any[]) => classNames.filter(Boolean).join(' ');

  const styles = {
    ...buttonStyled,
    width: block ? '100%' : 'auto',
  };

  const iconType = loading ? <LoadingIcon /> : <yoru.div>{icon}</yoru.div>;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;

    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  // set icon position always left when loading
  const setIconPosition = iconPosition !== 'left' && !loading ? 'row-reverse' : 'initial';

  const ButtonContent = () => (
    <yoru.div
      __style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: !icon && !loading ? '0' : '0.5rem',
        flexDirection: setIconPosition,
      }}
    >
      {iconType}
      {children}
    </yoru.div>
  );

  if (variants === 'link') {
    return (
      <yoru.a
        __style={styles}
        className={classes('yoru-button', className)}
        onClick={handleClick}
        disabled={disabled || loading}
        {...(rest as AnchorButtonProps)}
      >
        <ButtonContent />
      </yoru.a>
    );
  }

  return (
    <>
      <yoru.button
        type="button"
        __style={styles}
        className={classes('yoru-button', className)}
        onClick={handleClick}
        disabled={disabled || loading}
        {...(rest as NativeButtonProps)}
      >
        <ButtonContent />
      </yoru.button>
    </>
  );
};
