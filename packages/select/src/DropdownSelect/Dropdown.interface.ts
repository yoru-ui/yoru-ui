export interface DropdownSelectProps {
  open: boolean;
  toggleDropdown: (e: MouseEvent) => void;
  children: React.ReactNode;
  isMultiple?: boolean;
  getSelectRef: () => HTMLDivElement | null;
}
