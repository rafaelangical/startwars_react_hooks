import React from "react";
import renderer from "react-test-renderer";
import Header from "../Components/Header/Header";

it("renders correctly header", () => {
  const tree = renderer
    .create(<Header title="Star Wars" className="header" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
