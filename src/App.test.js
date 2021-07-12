import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App';

test('should render App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open modal/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render Modal Component', async() => {
  render(<App />);
  fireEvent.click(screen.getByText('Open modal'))
  await waitFor(() => screen.getByRole('dialog'))
expect(screen.getByRole('dialog')).toHaveTextContent('This is an accessable modal')
});