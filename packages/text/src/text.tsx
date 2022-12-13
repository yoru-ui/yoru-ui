import * as React from 'react';
import { yoru } from '@yoru-ui/core';
import { useResolvedThemes } from '@yoru-ui/themes';
import type { TextSize } from '@yoru-ui/themes/src/foundations/text';

export interface TextProperties
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  // your props here
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  size?: TextSize;
  align?: 'left' | 'center' | 'right' | 'justify';
  fw?: 'lighter' | 'normal' | 'bold';
  fs?: 'normal' | 'italic';
  variant?: 'link';
  color?: string;
}

export const Text: React.FC<TextProperties> = ({
  children,
  as = 'p',
  size = 'base',
  align = 'left',
  fw = 'normal',
  fs = 'normal',
  color = '#333333',
  variant,
  ...props
}) => {
  const textStyle = useResolvedThemes('Text', { sizes: size, variants: variant });
  const TextNode = variant === 'link' ? yoru['a'] : yoru[as];

  return (
    <TextNode
      color={color}
      __style={{
        ...textStyle,
        textAlign: align,
        fontWeight: fw,
        fontStyle: fs,
      }}
      className="yoru-text"
      href="https://instagram.com"
      {...props}
    >
      {children}
    </TextNode>
  );
};
