export interface DropdownSelectProps {
  open: boolean;
  toggleDropdown: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  properties?: {
    width: number;
    x: number;
    y: number;
  } | null;
  isMultiple?: boolean;
}
