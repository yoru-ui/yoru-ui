import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { Input } from '@yoru-ui/input/src';
import { SelectOption } from '../Select.interface';

export type BaseSingleSelectProps = {
  placeholder?: React.ReactNode;
  showSearch?: boolean;
  isMultiple?: false;
  children?: React.ReactNode;
  onClearSelected?: (e: any) => void;
  value?: SelectOption | null;
};

export const SingleSelect: React.FC<BaseSingleSelectProps> = props => {
  const { value, placeholder, isMultiple, showSearch = false, onClearSelected } = props;

  const [searchValue, setSearchValue] = React.useState<string>('');

  const inputValue: string = searchValue || '';

  const hasTextInput = !isMultiple && !showSearch ? false : !!inputValue;

  const renderPlaceholder = () => {
    if (value) {
      return null;
    }
    const hiddenStyle = hasTextInput ? { visibility: 'hidden' as const } : undefined;
    return (
      <yoru.span className="yoru-selector__placeholder" style={hiddenStyle}>
        {placeholder}
      </yoru.span>
    );
  };

  const suffixIcon = () => {
    return showSearch ? (
      <yoru.span className="yoru-selector__suffix-icon" />
    ) : (
      <yoru.button onClick={onClearSelected} __style={{ zIndex: 999 }}>
        &times;
      </yoru.button>
    );
  };

  return (
    <>
      <yoru.div className="yoru-selector">
        <yoru.div
          className={`yoru-selector__input ${
            showSearch ? `yoru-selector__input--showSearch` : 'yoru-selector__input--hiddenSearch'
          }`}
        >
          <Input
            readOnly={!showSearch}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
            suffix={suffixIcon()}
          />
        </yoru.div>

        {!isMultiple && value && !hasTextInput && (
          <yoru.span className={`yoru-selector__selectedItem`}>{value.label}</yoru.span>
        )}

        {renderPlaceholder()}
      </yoru.div>
    </>
  );
};

export default SingleSelect;
