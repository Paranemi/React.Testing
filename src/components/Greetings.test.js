import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

test("renders Hello World", () => {
  render(<Greetings />);
  const helloWorldElement = screen.getByText(/hello world/i);
  expect(helloWorldElement).toBeInTheDocument();
});

test("renders 'Good to see u' when button was not clicked", () => {
  render(<Greetings />);
  const paragraphElement = screen.getByText(/good to see u/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("renders 'Changed' when button was clicked", () => {
  render(<Greetings />);
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
  const paragraphElement = ("changed!", { exact: false });
  expect(buttonElement).toBeInTheDocument();
});
