import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders my name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Sam Tovey/i);
  expect(nameElement).toBeInTheDocument();
});
