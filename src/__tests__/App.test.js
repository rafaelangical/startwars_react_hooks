/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

// eslint-disable-next-line no-undef
test("renders title of page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();
});
