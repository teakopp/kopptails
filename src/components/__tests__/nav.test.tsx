import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Nav from "../nav";

afterEach(() => {
  cleanup();
});

it("Renders title propely", () => {
  render(<Nav title="Correct" subtitle="Nope" />);
  const element = screen.getByText(/Correct/i);
  expect(element).toBeInTheDocument();
});

it("Renders subtitle propely", () => {
  render(<Nav title="Nope" subtitle="Correct" />);
  const element = screen.getByText(/Correct/i);
  expect(element).toBeInTheDocument();
});

it("Menu opens on click", () => {
  render(<Nav title="Nope" subtitle="Correct" />);
  fireEvent.click(screen.getByAltText(/menu/i));
  const element = screen.getByAltText(/close/i);
  expect(element).toBeInTheDcument();
});
