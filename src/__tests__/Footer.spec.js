import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Components/Footer/Footer";

it("renders correctly footer", () => {
  const tree = renderer.create(<Footer text="Carregar mais" />).toJSON();
  expect(tree).toMatchSnapshot();
});
