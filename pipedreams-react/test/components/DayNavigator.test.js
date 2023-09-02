/**
 * @jest-environment jsdom
 */
// /test/components/DayNavigator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import DayNavigator from '../../src/components/DayNavigator.js';

describe('DayNavigator', () => {
  it('renders without errors', () => {
    const { container } = render(
      <DayNavigator currentDay="Monday" handleDayChange={() => {}} />
    );
    expect(container).toBeTruthy();
  });

  it('displays the current day', () => {
    const { getByText } = render(
      <DayNavigator currentDay="Wednesday" handleDayChange={() => {}} />
    );
    const currentDayElement = getByText('Wednesday');
    expect(currentDayElement).toBeInTheDocument();
  });

  it('disables the "Previous" button on Monday', () => {
    const { getByText } = render(
      <DayNavigator currentDay="Monday" handleDayChange={() => {}} />
    );
    const previousButton = getByText('<');
    expect(previousButton).toBeDisabled();
  });

  it('disables the "Next" button on Friday', () => {
    const { getByText } = render(
      <DayNavigator currentDay="Friday" handleDayChange={() => {}} />
    );
    const nextButton = getByText('>');
    expect(nextButton).toBeDisabled();
  });

  it('calls handleDayChange with the correct day when "Previous" button is clicked', () => {
    const mockHandleDayChange = jest.fn();
    const { getByText } = render(
      <DayNavigator currentDay="Wednesday" handleDayChange={mockHandleDayChange} />
    );
    const previousButton = getByText('<');
    fireEvent.click(previousButton);
    expect(mockHandleDayChange).toHaveBeenCalledWith('Tuesday');
  });

  it('calls handleDayChange with the correct day when "Next" button is clicked', () => {
    const mockHandleDayChange = jest.fn();
    const { getByText } = render(
      <DayNavigator currentDay="Wednesday" handleDayChange={mockHandleDayChange} />
    );
    const nextButton = getByText('>');
    fireEvent.click(nextButton);
    expect(mockHandleDayChange).toHaveBeenCalledWith('Thursday');
  });
});
