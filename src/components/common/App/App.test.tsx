import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders welcome text', () => {
  render(<App />);
  expect(screen.getByTestId('simpplr-logo')).toBeVisible();
});
