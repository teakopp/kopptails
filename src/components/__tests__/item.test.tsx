import React from "react";
import {cleanup, render, screen} from '@testing-library/react';
import Item from "../item"


afterEach(() => {
  cleanup()
}) 


it("renders title propely", () =>{
  render(<Item id="0" src="" title="Hello" />);
  const element = screen.getByText(/Hello/i);
  expect(element).toBeInTheDocument();
})

it("renders src propely", () =>{
  render(<Item id="0" src="https://test.svg" title="Hello" />);
  const element = screen.getByRole("img")
  expect(element.src).toBe("https://test.svg/");
})


