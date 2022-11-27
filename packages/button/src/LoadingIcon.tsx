import { yoru } from '@yoru-ui/core';
import React from 'react';
import { keyframes } from '@emotion/react';

const circleWrapper = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const spinnerLine = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
}
`;

const LoadingIcon: React.FC = () => {
  return (
    <yoru.div className="yoru-loading-icon">
      <yoru.svg
        __style={{
          animation: `${circleWrapper} 2s linear infinite`,
          zIndex: 2,
          width: 20,
          height: 20,
          '& circle': {
            strokeLinecap: 'round',
            animation: `${spinnerLine} 1.5s ease-in-out infinite`,
          },
        }}
        viewBox="0 0 50 50"
      >
        <yoru.circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></yoru.circle>
      </yoru.svg>
    </yoru.div>
  );
};

export default LoadingIcon;
