import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';

export interface RadioProperties {
  // your props here
  name?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultChecked?: boolean;
  label?: string;
  sizes?: 'sm' | 'md' | 'lg';
  background?: string;
  dotColor?: string;
}

export const Radio: React.FC<RadioProperties> = ({
  name,
  defaultChecked,
  value = '',
  onChange = () => {},
  label = '',
  sizes = 'md',
  background = 'pink.500',
  dotColor = 'white',
}) => {
  const radioStyle = useResolvedThemes('Radio', { sizes });
  const id = React.useId();

  const activeBackground = {
    '&:checked + .yoru-radio__control': {
      background,
      '&:after': {
        background: dotColor,
      },
    },
  };

  return (
    <>
      <yoru.label __style={radioStyle} className="yoru-radio" htmlFor={`radio${id}`} name={name}>
        <yoru.input
          __style={{ ...activeBackground }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked) {
              onChange(value);
            }
          }}
          defaultChecked={defaultChecked}
          value={value}
          type="radio"
          id={`radio${id}`}
          name={name}
        />
        <yoru.span className="yoru-radio__control" />
        <yoru.span>{label}</yoru.span>
      </yoru.label>
    </>
  );
};
