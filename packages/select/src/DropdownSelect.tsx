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
  fontFamily: 'sans-serif',

  '& .yoru-select-dropdown__dropdownItem': {
    padding: '.25em .5em',
    cursor: 'pointer',

    '&--selected': {
      background: 'sky.100',
    },

    '&:hover': {
      background: 'gray.200',
    },

    '&--highlighted': {
      background: 'sky.200',
    },

    '&--disabled': {
      pointerEvents: 'none',
      opacity: 0.6,
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
  open = false,
  toggleDropdown,
  children,
  properties,
}) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const closeModal = React.useCallback(
    (e: any) => {
      if (open === true) {
        const target = e.target;
        console.info(dropdownRef.current);
        if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(target)) {
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
          top: open ? properties?.y : Number(properties?.y) - 10,
          left: properties?.x,
          width: properties?.width,
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
