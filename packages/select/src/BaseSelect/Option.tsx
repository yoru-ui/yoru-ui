import React from 'react';
import { yoru } from '@yoru-ui/core';

export interface BaseOptionsProps extends React.HTMLAttributes<HTMLLIElement> {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
  selected?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
}

// todo: make this compatible like HTML select component
const Option: React.FC<BaseOptionsProps> = props => {
  const { onClick, children, selected, highlighted, disabled, ...rest } = props;
  const conditionalClasss = [
    `${selected ? 'yoru-select-dropdown__dropdownItem--selected' : ''}`,
    `${highlighted ? 'yoru-select-dropdown__dropdownItem--highlighted' : ''}`,
    `${disabled ? 'yoru-select-dropdown__dropdownItem--disabled' : ''}`,
  ];

  const mergeEmptyClassName = () => conditionalClasss.filter(Boolean).join(' ');

  return (
    <yoru.li
      onClick={onClick}
      className={`yoru-select-dropdown__dropdownItem ${mergeEmptyClassName()}`}
      {...rest}
    >
      {children}
    </yoru.li>
  );
};

export default Option;
