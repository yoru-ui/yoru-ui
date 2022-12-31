import { SelectOption } from '../Select.interface';

export type BaseMultipleSelectProps = {
  placeholder?: React.ReactNode;
  isMultiple?: true;
  children?: React.ReactNode;
  onClearSelected?: (e: any) => void;
  handleSelected: (e: any) => void;
  value: SelectOption[];
  isOpen?: boolean;
};

export type BaseSingleSelectProps = {
  placeholder?: React.ReactNode;
  isMultiple?: false;
  children?: React.ReactNode;
  onClearSelected?: (e: any) => void;
  value?: SelectOption | null;
  isOpen?: boolean;
};
