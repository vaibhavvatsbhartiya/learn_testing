import { render, screen } from '@testing-library/react';
import App from './App';

test('check hello on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test("check input box", () =>{ 
  render(<App/>);
  const inputBox = screen.getByRole('textbox');
  const inputBoxPlaceholder = screen.getByPlaceholderText(/Enter User name/i);
  expect(inputBox).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name","enter name");
  expect(inputBox).toHaveAttribute("id","UserId");
  expect(inputBox).toHaveAttribute("type","text");
  expect(inputBoxPlaceholder).toBeInTheDocument();
});