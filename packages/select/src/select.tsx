import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import SingleSelect from './BaseSelect/SingleSelect';
import Option from './BaseSelect/Option';
import DropdownSelect from './DropdownSelect';
import { BaseSelectProps, SelectOption } from './Select.interface';

export const Select: React.FC<BaseSelectProps> = props => {
  const { value, options, placeholder, onChange, children } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownDimension, setDropdownDimension] = React.useState<{
    width: number;
    x: number;
    y: number;
  } | null>(null);

  const buttonStyled = useResolvedThemes('Select', {});

  const handleCloseDropdown = () => {
    setIsOpen(false);
    setDropdownDimension({
      width: 0,
      x: 0,
      y: 0,
    });
  };

  const handleSelected = (option: SelectOption) => {
    if (onChange) {
      if (option !== value) {
        onChange(option);
        setIsOpen(false);
      }
    }
  };

  const onClearSelected = (e: any) => {
    e.stopPropagation();
    handleCloseDropdown();
    return onChange(null);
  };

  const toggleDropdown = React.useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  // set dimension of dropdown when open
  const callBackRef = React.useCallback((domNode: HTMLElement) => {
    if (domNode) {
      const bounds = domNode.getBoundingClientRect();
      setDropdownDimension({
        width: bounds.width,
        x: bounds.x,
        y: bounds.y + bounds.height + 5,
      });
    }
  }, []);

  return (
    <yoru.div
      tabIndex={0}
      ref={callBackRef}
      className="yoru-select"
      __style={buttonStyled}
      onClick={toggleDropdown}
    >
      <SingleSelect
        placeholder={placeholder}
        value={value as SelectOption}
        onClearSelected={onClearSelected}
      />
      <DropdownSelect open={isOpen} properties={dropdownDimension} toggleDropdown={toggleDropdown}>
        {options
          ? options.map((option, index) => (
              <Option
                onClick={(e: any) => {
                  e.stopPropagation();
                  handleSelected(option);
                }}
                key={index}
              >
                {option.label}
              </Option>
            ))
          : children}
      </DropdownSelect>
    </yoru.div>
  );
};

export default Select;
