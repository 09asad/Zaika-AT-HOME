import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as ContactModule from "../Contact.jsx"; 

// Handle double-defaults or weird ESM import structure
const Contact = ContactModule.default?.default || ContactModule.default || ContactModule;

// Either write test or it - 

test("Should render Contact heading", () => {      
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: "Contact" });    // Querying
  expect(heading).toBeInTheDocument();    // Assertion
});

test("Should have call and email info", () => {
  render(<Contact />);
  expect(screen.getByText(/9876543210/)).toBeInTheDocument();    // Querying
  expect(screen.getByText(/zaikaathomehelp@gmail.com/)).toBeInTheDocument();    // Assertion
});
