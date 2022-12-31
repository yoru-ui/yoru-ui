import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import ChevronIcon from '../ChevronIcon';
import { BaseMultipleSelectProps } from './BaseSelect.interface';

export const MultiSelect: React.FC<BaseMultipleSelectProps> = props => {
  const { value, placeholder, onClearSelected, handleSelected, isOpen } = props;

  const renderPlaceholder = () => {
    if (value) {
      return null;
    }
    return <yoru.span className="yoru-selector__placeholder">{placeholder}</yoru.span>;
  };

  const suffixIcon = () => {
    return (
      <yoru.div
        __style={{
          display: 'flex',
          columnGap: '.5rem',
          position: 'absolute',
          right: 10,
          paddingLeft: '1rem',
        }}
      >
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
      <yoru.div className="yoru-selector yoru-selector__multiple">
        {value && (
          <yoru.div className={`yoru-selector-multiple__selectedItem`}>
            {value.map((v, i) => {
              return (
                <yoru.span
                  className="yoru-tag"
                  __style={{
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.25em',
                    marginRight: '0.2rem',
                    outline: 'none',
                    border: '1px solid',
                    padding: '0.25em 0.5em',
                    borderColor: 'gray.300',
                    color: 'gray.500',
                    '&:hover': {
                      borderColor: 'gray.500',
                      cursor: 'pointer',
                      '& .yoru-tag__closebtn': {
                        color: 'rose.500',
                      },
                    },
                  }}
                  key={i}
                >
                  {v.label}{' '}
                  <span
                    className="yoru-tag__closebtn"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      handleSelected(v);
                    }}
                  >
                    &times;
                  </span>
                </yoru.span>
              );
            })}
          </yoru.div>
        )}

        {renderPlaceholder()}
        {suffixIcon()}
      </yoru.div>
    </>
  );
};

export default MultiSelect;
