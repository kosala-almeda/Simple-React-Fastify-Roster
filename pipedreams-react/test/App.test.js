/**
 * @jest-environment jsdom
 * 
 * Testing pipedreams-react/src/App.js
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App.js';

test('renders the app', () => {
  render(<App />);
  const element = screen.getByText(/the Staff Roster/i);
  expect(element).toBeInTheDocument();
});
