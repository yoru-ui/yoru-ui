import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import SingleSelect from './BaseSelect/SingleSelect';
import Option from './BaseSelect/Option';
import DropdownSelect from './DropdownSelect';
import { BaseSelectProps, SelectOption } from './Select.interface';
import MultiSelect from './BaseSelect/MultiSelect';

export const Select: React.FC<BaseSelectProps> = props => {
  const { value, options, placeholder, onChange, isMultiple, styles } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownDimension, setDropdownDimension] = React.useState<{
    width: number;
    x: number;
    y: number;
  } | null>(null);

  const buttonStyled = useResolvedThemes('Select', {});

  const toggleDropdown = React.useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handleSelected = (option: SelectOption) => {
    if (onChange) {
      if (isMultiple) {
        if (value?.includes(option)) {
          onChange(value.filter(item => item !== option));
        } else {
          onChange([...(value || []), option]);
        }
      } else {
        if (option !== value) {
          onChange(option);
          setIsOpen(false);
        }
      }
    }
  };

  const onClearSelected = () => {
    toggleDropdown();
    return isMultiple ? onChange([]) : onChange(null);
  };

  // accessbility
  const handlerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'Escape':
        setIsOpen(prev => !prev);
        break;
    }
  };

  // set dimension of dropdown when open
  const getNodeRef = React.useCallback((domNode: HTMLElement) => {
    if (domNode) {
      const bounds = domNode.getBoundingClientRect();
      setDropdownDimension({
        width: bounds.width,
        x: bounds.x,
        y: bounds.y + bounds.height + 5,
      });
    }
  }, []);

  const isOptionSelected = (option: SelectOption) => {
    return isMultiple ? value?.includes(option) : option === value;
  };

  return (
    <yoru.div className="yoru-select" __style={{ ...buttonStyled, ...styles }}>
      <yoru.div
        className={`yoru-select-inner ${isOpen ? 'yoru-select-inner--focused' : ''}`}
        tabIndex={0}
        ref={getNodeRef}
        onClick={toggleDropdown}
        onKeyDown={handlerKeyDown}
      >
        {isMultiple ? (
          <MultiSelect
            placeholder={placeholder}
            value={value || []}
            onClearSelected={onClearSelected}
            isOpen={isOpen}
            handleSelected={handleSelected}
          />
        ) : (
          <SingleSelect
            placeholder={placeholder}
            value={value as SelectOption}
            onClearSelected={onClearSelected}
            isOpen={isOpen}
          />
        )}
        <DropdownSelect
          open={isOpen}
          properties={dropdownDimension}
          toggleDropdown={toggleDropdown}
          isMultiple={isMultiple}
        >
          {options
            ? options.map((option, index) => (
                <Option
                  onClick={(e: any) => {
                    e.stopPropagation();
                    handleSelected(option);
                  }}
                  key={index}
                  selected={isOptionSelected(option)}
                >
                  {option.label}
                </Option>
              ))
            : null}
        </DropdownSelect>
      </yoru.div>
    </yoru.div>
  );
};

export default Select;
