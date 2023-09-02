/**
 *  @jest-environment jsdom
 */
// /test/pages/RosterPage.test.js
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import RosterPage from '../../src/pages/RosterPage.js';
import { DayContext } from '../../src/App.js';

// You can mock dependencies or provide mock data as needed for testing
jest.mock('../../src/services/StaffService', () => ({
  fetchStaffData: jest.fn(() => Promise.resolve({
    Monday: ['John', 'Jane']
  })),
}));

describe('RosterPage', () => {
  const contextValue = {
    currentDay: 'Monday',
    setCurrentDay: jest.fn(),
  };

  it('renders without errors', async () => {
    await act(async () => {
      const { container } = render(
        <DayContext.Provider value={contextValue}>
          <RosterPage staffType="Waiters" staffTypes={['Waiters', 'Cooks']} />
        </DayContext.Provider>
      );
      expect(container).toBeTruthy();
    });
  });

  it('renders without errors', async () => {
    await act(async () => {
      const { container } = render(
        <DayContext.Provider value={contextValue}>
          <RosterPage staffType="Waiters" staffTypes={['Waiters', 'Cooks']} />
        </DayContext.Provider>
      );
      expect(container).toBeTruthy();
    });
  });

  it('renders StaffNavigator component', async () => {
    await act(async () => {
      const { getAllByText } = render(
        <DayContext.Provider value={contextValue}>
          <RosterPage staffType="Waiters" staffTypes={['Waiters', 'Cooks']} />
        </DayContext.Provider>
      );
    });

    const cooksButton = screen.getAllByText('Cooks').filter(e => e.tagName === 'BUTTON');
    expect(cooksButton[0]).toBeInTheDocument();
    const waitersButton = screen.getAllByText('Waiters').filter(e => e.tagName === 'BUTTON');
    expect(waitersButton[0]).toBeInTheDocument();
  });

});

