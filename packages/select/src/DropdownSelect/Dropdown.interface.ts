export interface DropdownSelectProps {
  open: boolean;
  toggleDropdown: (e: MouseEvent) => void;
  children: React.ReactNode;
  properties?: {
    width: number;
    x: number;
    y: number;
  } | null;
  isMultiple?: boolean;
}
