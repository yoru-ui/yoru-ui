import * as React from 'react';
import { yoru, YoruStyleProperties } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';

export interface SwitchProperties {
  checked?: boolean;
  sizes?: 'sm' | 'md' | 'lg';
  activeColor?: string;
  inactiveColor?: string;
  ringColor?: string;
  onChange?: (checked: boolean) => void;
}

const SwitchInput = yoru.input;

export const Switch: React.FC<SwitchProperties> = ({
  sizes = 'sm',
  checked,
  activeColor = 'sky.500',
  inactiveColor = 'gray.300',
  ringColor = 'white',
  onChange = () => {},
}) => {
  const styledSwitch = useResolvedThemes('Switch', { sizes });

  const activeBackground: YoruStyleProperties = {
    '&:checked + .switch': {
      background: activeColor,
    },
  };

  const inactiveBackground: YoruStyleProperties = { background: inactiveColor };

  const ringBackground = { '&:before': { backgroundColor: ringColor } };

  return (
    <yoru.label
      className="yoru-switch"
      __style={{
        ...styledSwitch,
      }}
    >
      <SwitchInput
        data-testid="yoru-switch"
        __style={{
          ...activeBackground,
        }}
        checked={checked}
        aria-checked={checked}
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
      />
      <yoru.span
        __style={{
          ...inactiveBackground,
          ...ringBackground,
        }}
        className="switch"
      />
    </yoru.label>
  );
};
