import React from "react";

export default function PeopleDetails(props) {
  const { people } = props;
  return (
    people && (
      <div className="modal">
        <img src="#" />
        <h2>{people.name}</h2>
        <span>Height: {people.height}</span>
        <span>Color Eye: {people.eye_color}</span>
        <span>Gender: {people.gender}</span>
        <span>Mass: {people.mass}</span>
      </div>
    )
  );
}
