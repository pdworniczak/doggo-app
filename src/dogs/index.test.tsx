import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("simple render check", () => {
  render(<App />);
  const headerElement = screen.getByText("Doggo");
  expect(headerElement).toBeInTheDocument();
});
