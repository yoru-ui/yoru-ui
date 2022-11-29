import { ColorScheme } from '@yoru-ui/themes';

export interface BaseButtonProps {
  // default html button props
  className?: string;
  children?: React.ReactNode;

  /**
   * a props to set button variant type
   * @default solid
   */
  variants?: 'solid' | 'outline' | 'ghost' | 'link';
  /**
   * a props to set button color & background color, the colorScheme get from theme foundation color
   * @default gray
   */
  colorScheme?: ColorScheme;
  /**
   * a props to set button size
   * @default md
   */
  sizes?: 'sm' | 'md' | 'lg';
  /**
   * a props to make button full width
   * @default false
   */
  block?: boolean;

  /**
   * a props to set button loading state
   * @default false
   */
  loading?: boolean;

  /**
   * a props to set button icon
   * @default false
   */
  icon?: React.ReactNode;
  /**
   * props to set the position of the icon
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
}

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'onClick' | 'sizes'>;

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
