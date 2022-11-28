import React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import LoadingIcon from './LoadingIcon';
import { ButtonProps } from './button.interface';

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

  const iconType = loading ? (
    <LoadingIcon />
  ) : (
    <yoru.div className="yoru-button__icon">{icon}</yoru.div>
  );

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

  const NodeButton = variants === 'link' ? yoru.a : yoru.button;

  return (
    <>
      <NodeButton
        type={variants === 'link' ? undefined : 'button'}
        __style={styles}
        className={classes('yoru-button', className)}
        onClick={handleClick}
        disabled={disabled || loading}
        {...rest}
      >
        <ButtonContent />
      </NodeButton>
    </>
  );
};
