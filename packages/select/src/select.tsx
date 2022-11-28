import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import { Input } from '@yoru-ui/input/src';

type SelectOption = {
  label: string;
  value: string | number | object;
};

export interface SelectProperties {
  options: SelectOption[];
  value?: SelectOption | null;
  onChange?: (value: SelectOption | undefined) => void;
}

export interface BaseSelectProps extends SelectProperties {
  placeholder: React.ReactNode;
  isMultiple?: boolean;
  showSearch?: boolean;
}

export const Select: React.FC<BaseSelectProps> = props => {
  const { value, placeholder, isMultiple = false, showSearch = false } = props;

  // const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const buttonStyled = useResolvedThemes('Select', {});

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

  return (
    <yoru.div className="yoru-select" __style={buttonStyled}>
      <yoru.div className="yoru-selector" onFocus={() => console.info('test')}>
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
            suffix="search"
          />
        </yoru.div>

        {!isMultiple && value && !hasTextInput && (
          <yoru.span className={`yoru-selector__selectedItem`}>{value.label}</yoru.span>
        )}

        {renderPlaceholder()}
      </yoru.div>
    </yoru.div>
  );
};

export default Select;
