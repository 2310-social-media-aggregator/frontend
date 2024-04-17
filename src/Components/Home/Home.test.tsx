import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  test('renders onload', () => {
    render(<Router><Home setActiveTab={() => {}} handlePageSwitch={() => {}} /></Router>);
  });

  test('renders Get Started button', () => {
    const { getByText } = render(<Router><Home setActiveTab={() => {}} handlePageSwitch={() => {}} /></Router>);
    const getStartedButton = getByText('Get Started');
    expect(getStartedButton).toBeInTheDocument();
  });

  test('calls setActiveTab and handlePageSwitch when Get Started button is clicked', () => {
    const setActiveTabMock = jest.fn();
    const handlePageSwitchMock = jest.fn();
    const { getByText } = render(
      <Router>
        <Home setActiveTab={setActiveTabMock} handlePageSwitch={handlePageSwitchMock} />
      </Router>
    );
    const getStartedButton = getByText('Get Started');
    fireEvent.click(getStartedButton);
    expect(setActiveTabMock).toHaveBeenCalledWith('all');
    expect(handlePageSwitchMock).toHaveBeenCalledWith('all');
  });
});
