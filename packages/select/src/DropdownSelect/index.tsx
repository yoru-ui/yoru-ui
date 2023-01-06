import { yoru } from '@yoru-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownSelectProps } from './Dropdown.interface';
import { styledDrodpwon } from './Dropdown.styled';

type DropdownBounds = {
  width: number;
  x: number;
  y: number;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  open = false,
  toggleDropdown,
  children,
  isMultiple,
  getSelectRef,
}) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [dropdownDimension, setDropdownDimension] = React.useState<DropdownBounds>();
  const { width, x, y } = dropdownDimension || {};

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

  React.useEffect(() => {
    // update dropdown position on window resize
    const onWindowResize = (): void => {
      const selectDOM = getSelectRef();
      if (selectDOM) {
        const bounds = selectDOM.getBoundingClientRect();
        setDropdownDimension({
          width: bounds.width,
          x: bounds.x,
          y: bounds.y + bounds.height + 5,
        });
      }
    };

    // run first time on initial render
    onWindowResize();

    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [getSelectRef]);

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
          transition: 'opacity .25s ease, top .25s ease, visibility .25s ease',
          top: !isMultiple ? (open ? y : Number(y) - 10) : undefined,
          left: x,
          width: width,
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
