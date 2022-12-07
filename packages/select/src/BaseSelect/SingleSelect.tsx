import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import ChevronIcon from '../ChevronIcon';
import { BaseSingleSelectProps } from './BaseSelect.interface';

export const SingleSelect: React.FC<BaseSingleSelectProps> = props => {
  const { value, placeholder, isMultiple = false, onClearSelected, isOpen } = props;

  const renderPlaceholder = () => {
    if (value) {
      return null;
    }
    const hiddenStyle = value ? { visibility: 'hidden' as const } : undefined;
    return (
      <yoru.span className="yoru-selector__placeholder" style={hiddenStyle}>
        {placeholder}
      </yoru.span>
    );
  };

  const suffixIcon = () => {
    return (
      <yoru.div __style={{ display: 'flex', columnGap: '.5rem', position: 'absolute', right: 10 }}>
        <yoru.span
          className="yoru-selector__close-button"
          onClick={onClearSelected}
          __style={{ zIndex: 999 }}
        >
          &times;
        </yoru.span>
        <yoru.div>
          <ChevronIcon direction={isOpen ? 'top' : 'bottom'} />
        </yoru.div>
      </yoru.div>
    );
  };

  return (
    <>
      <yoru.div className="yoru-selector" __style={{ position: 'relative' }}>
        {!isMultiple && value && (
          <yoru.span className={`yoru-selector__selectedItem`}>{value.label}</yoru.span>
        )}

        {renderPlaceholder()}
        {suffixIcon()}
      </yoru.div>
    </>
  );
};

export default SingleSelect;
