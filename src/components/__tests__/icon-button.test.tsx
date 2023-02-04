import React from "react";
import { cleanup, render, screen} from "@testing-library/react";
import IconButton from "../icon-button";

afterEach(() => {
  cleanup();
});

it("renders image with alt property", () =>{
  render(<IconButton alt="test" src="https://test.org"  />);
  const element = screen.getByAltText(/test/i);
  expect(element).toBeInTheDocument();
})

it("renders src propely", () =>{
  render(<IconButton alt="0" src="https://test.svg" />);
  const element = screen.getByRole("img")
  expect(element.src).toBe("https://test.svg/");
})
