import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should display name', () => {
  const { getByText } = render(<App />);
  const element = getByText(/React Workshop/i);
  expect(element).toBeInTheDocument();
});
