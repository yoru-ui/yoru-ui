import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';

export interface CheckboxProperties {
  // your props here
  children?: React.ReactNode;
  label?: string;
  checked?: boolean;
  sizes?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
  onChange?: (checked?: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProperties> = ({
  label,
  checked = false,
  sizes = 'md',
  indeterminate = false,
  onChange = () => {},
}) => {
  const variants = indeterminate ? 'indeterminate' : undefined;
  const styledCheckbox = useResolvedThemes('Checkbox', { sizes, variants });

  return (
    <yoru.label __style={styledCheckbox} className="yoru-checkbox">
      <yoru.input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
        checked={checked}
        className="checkbox"
        type="checkbox"
      />
      <yoru.span className="checkbox-box" /> {label}
    </yoru.label>
  );
};
