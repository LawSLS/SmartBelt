import { render, screen } from "@testing-library/react";
import App from "./App";

test("found page title", () => {
  render(<App />);
  const Element = screen.getByText(/Catalogue/i);
  expect(Element).toBeInTheDocument();
});
