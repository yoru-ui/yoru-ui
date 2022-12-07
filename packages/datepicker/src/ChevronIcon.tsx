import React from 'react';
import { yoru } from '@yoru-ui/core';

interface ChevronIconProperties {
  direction?: 'left' | 'right';
}

const ChevronIcon: React.FC<ChevronIconProperties> = ({
  direction = 'right',
}): React.ReactElement => {
  return (
    <yoru.svg
      __style={{
        transform: direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
      width="8"
      height="10"
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <yoru.path
        d="M1.71676 1L8 7L1.71676 13"
        stroke="#969696"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </yoru.svg>
  );
};

export default ChevronIcon;
