/* eslint-disable prefer-destructuring */
import React from "react";
import renderer from "react-test-renderer";
import PeopleDetails from "./PeopleDetails";

it("renders correctly but not visual effect", () => {
  const people = {};
  const tree = renderer
    .create(<PeopleDetails show={false} people={people} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with data", () => {
  const people = {
    name: "axzxx",
    height: 20,
    eye_color: "blue",
    starships: ["http://url1", "http://url2"],
  };
  const tree = renderer.create(<PeopleDetails show people={people} />).toJSON();
  expect(tree).toMatchSnapshot();
});
