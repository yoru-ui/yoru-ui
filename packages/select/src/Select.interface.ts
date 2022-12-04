export type SelectOption = {
  label: string;
  value: string | number;
};
export interface SingleSelectProps {
  isMultiple?: false;
  value?: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
}

export type BaseSelectProps = {
  placeholder: React.ReactNode;
  showSearch?: boolean;
  options?: SelectOption[];
  children?: React.ReactNode;
} & SingleSelectProps;
