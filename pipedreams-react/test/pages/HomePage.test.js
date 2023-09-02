/*
 * @jest-environment jsdom
 * 
 * Testing pipedreams-react/src/pages/HomePage.js
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '../../src/pages/HomePage.js';

describe('HomePage', () => {
  it('renders without errors', () => {
    const { container } = render(<HomePage staffTypes={['Waiters', 'Cooks']} />);
    expect(container).toBeTruthy();
  });

  it('displays the title', () => {
    const { getByText } = render(<HomePage staffTypes={['Waiters', 'Cooks']} />);
    const titleElement = getByText('the Staff Roster');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the description', () => {
    const { getByText } = render(<HomePage staffTypes={['Waiters', 'Cooks']} />);
    const descriptionElement = getByText('Select the staff type and the day to see the roster');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders StaffNavigator component', () => {
    const { getByText } = render(<HomePage staffTypes={['Waiters', 'Cooks']} />);
    const cooksButton = getByText('Cooks');
    expect(cooksButton).toBeInTheDocument();
    const waitersButtons = getByText('Waiters');
    expect(waitersButtons).toBeInTheDocument();
  });
});
