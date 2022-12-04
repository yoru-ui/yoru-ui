import { yoru, YoruStyleProperties } from '@yoru-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

const styledDrodpwon: YoruStyleProperties = {
  position: 'absolute',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  maxHeight: '15em',
  overflowY: 'auto',
  border: '.05em solid',
  borderColor: 'gray.200',
  borderRadius: '.25em',
  background: 'white',
  zIndex: 100,

  '&__dropdownItem': {
    padding: '.25em .5em',
    cursor: 'pointer',

    '&:hover': {
      background: 'gray.200',
    },

    '&--selected': {
      background: 'sky.100',
    },
  },
};

interface DropdownSelectProps {
  open: boolean;
  toggleDropdown: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  properties?: {
    width: number;
    x: number;
    y: number;
  } | null;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  open,
  toggleDropdown,
  children,
  properties,
}) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const closeModal = React.useCallback(
    (e: any) => {
      const target = e.target;

      if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(target)) {
        toggleDropdown(e);
      }
    },
    [toggleDropdown],
  );

  React.useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });
    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <yoru.div className="yoru-virtual-dropdown">
      <yoru.ul
        className="yoru-selector__dropdown"
        ref={dropdownRef}
        __style={{
          ...styledDrodpwon,
          display: open ? 'block' : 'none',
          top: properties?.y,
          left: properties?.x,
          width: properties?.width,
        }}
      >
        {children}
      </yoru.ul>
    </yoru.div>,
    document.body,
  );
};

export default DropdownSelect;
