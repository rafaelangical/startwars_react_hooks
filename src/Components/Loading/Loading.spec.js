import React from "react";
import renderer from "react-test-renderer";
import Loading from "./Loading";

it("renders correctly loading", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
