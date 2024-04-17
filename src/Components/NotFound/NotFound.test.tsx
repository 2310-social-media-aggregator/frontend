import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NotFound component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
  });

  it('displays the correct title', () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(getByText('Page not found!')).toBeInTheDocument();
  });

  it('displays the correct message', () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(getByText('Please return to the home page and try again.')).toBeInTheDocument();
  });

  it('redirects to home page when return button is clicked', () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );
    const returnButton = getByText('Return Home');
    fireEvent.click(returnButton);
    expect(window.location.pathname).toBe('/');
  });
});
