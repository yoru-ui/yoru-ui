import { yoru } from '@yoru-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownSelectProps } from './Dropdown.interface';
import { styledDrodpwon } from './Dropdown.styled';

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  open = false,
  toggleDropdown,
  children,
  properties,
  isMultiple,
}) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const closeModal = React.useCallback(
    (e: MouseEvent) => {
      if (open === true) {
        const target = e.target;
        if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
          toggleDropdown(e);
        }
        return false;
      }
    },
    [toggleDropdown, open],
  );

  React.useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });
    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <yoru.div className="yoru-virtual-dropdown">
      <yoru.ul
        className="yoru-select-dropdown"
        ref={dropdownRef}
        tabIndex={0}
        __style={{
          ...styledDrodpwon,
          visibility: open ? 'visible' : 'hidden',
          opacity: open ? 1 : 0,
          transition: 'all .25s ease',
          top: !isMultiple ? (open ? properties?.y : Number(properties?.y) - 10) : undefined,
          left: properties?.x,
          width: properties?.width,
          marginTop: isMultiple ? (open ? '.5rem' : 0) : undefined,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {children}
      </yoru.ul>
    </yoru.div>,
    document.body,
  );
};

export default DropdownSelect;
