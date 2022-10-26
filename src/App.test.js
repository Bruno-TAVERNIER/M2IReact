import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ma page d accueil', () => {
  render(<App />);
  const linkElement = screen.getByText(/ma page/i);
  expect(linkElement).toBeInTheDocument();
});
