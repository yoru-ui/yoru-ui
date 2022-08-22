import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { yoru, getCss, yoruCSSVars } from '../index';

const mockColorFoundation = {
  colors: {
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
};

const theme = yoruCSSVars(mockColorFoundation);

describe('Should test the factory system', () => {
  it('Should test the factory system', () => {
    render(<yoru.button className="yoru-button">Yoru Button</yoru.button>);
    expect(screen.getByText('Yoru Button').className).toContain('yoru-button');
  });

  it('Should test css vars transform system', () => {
    const baseStyle = {
      color: 'grey.500',
      borderRadius: '1em',
      backgroundColor: 'grey.100',
      margin: '1rem',
    };

    const finalStyle = getCss(baseStyle)(theme);

    expect(finalStyle).toMatchInlineSnapshot(`
        Object {
          "backgroundColor": "var(--yoru-colors-grey-100)",
          "borderRadius": "1em",
          "color": "var(--yoru-colors-grey-500)",
          "margin": "1rem",
        }
      `);
  });

  it('Should test pseudo transformer', () => {
    const baseStyle = {
      color: 'grey.500',
      borderRadius: '1em',
      _hover: {
        backgroundColor: 'grey.100',
      },
    };

    const finalStyle = getCss(baseStyle)(theme);

    expect(finalStyle).toMatchInlineSnapshot(`
        Object {
          "&:hover, &[data-hover]": Object {
            "backgroundColor": "grey.100",
          },
          "borderRadius": "1em",
          "color": "var(--yoru-colors-grey-500)",
        }
      `);
  });
});
