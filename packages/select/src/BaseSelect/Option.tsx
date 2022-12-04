import React from 'react';
import { yoru } from '@yoru-ui/core';

export interface BaseOptionsProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
}

// todo: make this compatible like HTML select component
const Option: React.FC<BaseOptionsProps> = ({ children, onClick }) => {
  return (
    <yoru.li onClick={onClick} className="yoru-selector__dropdownItem">
      {children}
    </yoru.li>
  );
};

export default Option;
