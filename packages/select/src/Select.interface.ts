import { YoruStyleProperties } from '@yoru-ui/core/src/system';

export type SelectOption = {
  label: string;
  value: string | number;
};
export interface SingleSelectProps {
  isMultiple?: false;
  value?: SelectOption | null;
  onChange: (value: SelectOption | null) => void;
}

export interface MultiSelectProps {
  isMultiple: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

export type BaseSelectProps = {
  placeholder: React.ReactNode;
  showSearch?: boolean;
  options?: SelectOption[];
  styles?: YoruStyleProperties;
} & (SingleSelectProps | MultiSelectProps);
