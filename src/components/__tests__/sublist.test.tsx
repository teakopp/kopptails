import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Sublist from "../sublist";

afterEach(() => {
  cleanup();
});

it("Renders main item name propely", () => {
  render(
    <Sublist mainItemName="Correct" sublistItemNames={["Ok", "Alright"]} />
  );
  const element = screen.getByText(/Correct/i);
  expect(element).toBeInTheDocument();
});

it("Renders sublist propely", () => {
  render(
    <Sublist mainItemName="Correct" sublistItemNames={["Ok", "Alright"]} />
  );
  fireEvent.click(screen.getByText(/Correct/i));
  const element = screen.getByText(/Ok/i);
  expect(element).toBeInTheDocument();
  const elementTwo = screen.getByText(/Alright/i);
  expect(elementTwo).toBeInTheDocument();
});
