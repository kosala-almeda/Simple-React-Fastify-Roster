/**
 * @jest-environment jsdom
 */
// /test/components/StaffNavigator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import StaffNavigator from '../../src/components/StaffNavigator.js';

describe('StaffNavigator', () => {
  it('renders without errors', () => {
    const { container } = render(
      <MemoryRouter>
        <StaffNavigator staffTypes={['Waiters', 'Cooks']} currentType="Waiters" />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('displays buttons for each staff type', () => {
    const { getByText } = render(
      <MemoryRouter>
        <StaffNavigator staffTypes={['Waiters', 'Cooks']} currentType="Waiters" />
      </MemoryRouter>
    );
    const waitersButton = getByText('Waiters');
    const cooksButton = getByText('Cooks');
    expect(waitersButton).toBeInTheDocument();
    expect(cooksButton).toBeInTheDocument();
  });

  it('applies the "primary" class to the current staff type button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <StaffNavigator staffTypes={['Waiters', 'Cooks']} currentType="Waiters" />
      </MemoryRouter>
    );
    const waitersButton = getByText('Waiters');
    const cooksButton = getByText('Cooks');
    expect(waitersButton).toHaveClass('btn-primary');
    expect(cooksButton).not.toHaveClass('btn-primary');
  });

  it('calls handleTypeChange when a button is clicked', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <StaffNavigator staffTypes={['Waiters', 'Cooks']} currentType="Waiters" />
      </Router>
    );
    const cooksButton = getByText('Cooks');
    fireEvent.click(cooksButton);
    expect(history.location.pathname).toBe('/Cooks');
  });
});
