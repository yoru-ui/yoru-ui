import React, { useEffect } from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';

type BaseInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProperties extends Omit<BaseInputProps, 'prefix'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProperties> = ({
  prefix,
  suffix,
  onChange,
  ...restProperties
}) => {
  const styledInput = useResolvedThemes('Input', {});

  useEffect(() => {
    if (prefix || suffix) {
      // dynamically set the padding of the input
      const affix = document.querySelector('.yoru-input-affix') as HTMLSpanElement;
      const suffixWidth = suffix ? `${affix.offsetWidth}px` : '11px';
      const prefixWidth = prefix ? `${affix.offsetWidth}px` : '11px';
      const inputElement = document.querySelector('input.yoru-input') as HTMLInputElement;
      inputElement.style.padding = `0 ${suffixWidth} 0 ${prefixWidth}`;
    }
  }, [prefix, suffix]);

  if (prefix || suffix) {
    return (
      <yoru.span
        className="yoru-input-affix-wrapper"
        __style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <yoru.span
          __style={{
            position: 'absolute',
            left: prefix ? 0 : 'unset',
            right: suffix ? 0 : 'unset',
            height: 38,
            minWidth: '2rem',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="yoru-input-affix"
        >
          {prefix ? prefix : suffix}
        </yoru.span>
        <yoru.input
          className="yoru-input"
          __style={{
            ...styledInput,
          }}
          onChange={onChange}
          {...restProperties}
        />
      </yoru.span>
    );
  }

  return (
    <yoru.input
      className="yoru-input"
      onChange={onChange}
      __style={{ ...styledInput }}
      {...restProperties}
    ></yoru.input>
  );
};
