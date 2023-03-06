import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Congrats, your environment is running correctly!/i);
  expect(linkElement).toBeInTheDocument();
});
