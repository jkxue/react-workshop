import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should display name', () => {
  const { getByText } = render(<App />);
  const element = getByText(/JK Xue/i);
  expect(element).toBeInTheDocument();
});
