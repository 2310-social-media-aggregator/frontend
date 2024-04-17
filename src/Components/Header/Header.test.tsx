import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { User } from '../../types';

describe('Header component', () => {
  const mockHandlePageSwitch = jest.fn();
  const mockSetActiveTab = jest.fn();
  let user: User = { name: 'Gavin', follows: [] };


  afterEach(() => {
    jest.clearAllMocks();
  });

  it('homepage renders without crashing', () => {
    render(
      <Router>
        <Header
          handlePageSwitch={mockHandlePageSwitch}
          activeTab="home" 
          setActiveTab={mockSetActiveTab}
          user={user}
        />
      </Router>
    );
  });

  it('displays the platform name', () => {
    const { getByText } = render(
      <Router>
        <Header
          handlePageSwitch={mockHandlePageSwitch}
          activeTab="home" 
          setActiveTab={mockSetActiveTab}
          user={user}
        />
      </Router>
    );
    expect(getByText('PLATFORM')).toBeInTheDocument();
  });

  it('displays the user name if user prop is provided', () => {
    const { getByText } = render(
      <Router>
        <Header
          handlePageSwitch={mockHandlePageSwitch}
          activeTab="home" 
          setActiveTab={mockSetActiveTab}
          user={user}
        />
      </Router>
    );
    expect(getByText('Welcome, Gavin')).toBeInTheDocument();
  });

  it('renders correct active tab class based on activeTab prop', () => {
    const { getByText } = render(
      <Router>
        <Header
          handlePageSwitch={mockHandlePageSwitch}
          activeTab="all"
          setActiveTab={mockSetActiveTab}
          user={user}
        />
      </Router>
    );
    const allCreatorsNavItem = getByText('All Creators');
    expect(allCreatorsNavItem).toHaveClass('active');
  });

  it('calls handlePageSwitch and setActiveTab with correct tab when a nav item is clicked', () => {
    const { getByText } = render(
      <Router>
        <Header
          handlePageSwitch={mockHandlePageSwitch}
          activeTab="home" 
          setActiveTab={mockSetActiveTab}
          user={user}
        />
      </Router>
    );
    const savedCreatorsNavItem = getByText('Saved Creators');
    fireEvent.click(savedCreatorsNavItem);
    expect(mockHandlePageSwitch).toHaveBeenCalledWith('saved');
    expect(mockSetActiveTab).toHaveBeenCalledWith('saved');
  });
});
