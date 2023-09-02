/*
 * @jest-environment jsdom
 * 
 * Testing pipedreams-react/src/components/StaffList.js
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StaffList from '../../src/components/StaffList.js';

describe('StaffList', () => {
  it('renders without errors', () => {
    const { container } = render(<StaffList staffData={['John', 'Jane']} />);
    expect(container).toBeTruthy();
  });

  it('displays "No staff" when staffData is empty', () => {
    const { getByText } = render(<StaffList staffData={[]} />);
    const noStaffElement = getByText('No staff');
    expect(noStaffElement).toBeInTheDocument();
  });

  it('displays staff members when staffData is provided', () => {
    const { getByText } = render(<StaffList staffData={['John', 'Jane']} />);
    const johnElement = getByText('John');
    const janeElement = getByText('Jane');
    expect(johnElement).toBeInTheDocument();
    expect(janeElement).toBeInTheDocument();
  });

  it('displays correct number of staff members', () => {
    const { getAllByRole } = render(<StaffList staffData={['John', 'Jane', 'Doe']} />);
    const staffMemberElements = getAllByRole('listitem');
    expect(staffMemberElements.length).toBe(3);
  });
});
