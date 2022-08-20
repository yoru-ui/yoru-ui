import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { yoru } from '../index';

describe('Should test the factory system', () => {
  it('Should test the factory system', () => {
    render(<yoru.button className="yoru-button">Yoru Button</yoru.button>);
    expect(screen.getByText('Yoru Button').className).toContain('yoru-button');
  });
});