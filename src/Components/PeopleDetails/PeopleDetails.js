/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import api from "../../services/api";

export default function PeopleDetails(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const { people, show } = props;

  useEffect(() => {
    const planets =
      people && people.starships
        ? people.starships.map(item =>
            api
              .get(item)
              .then(resp => resp.data)
              .catch(err => setError(true))
          )
        : null;
    show &&
      Promise.all(planets)
        .then(values => {
          setLoading(false);
          setData(values);
          return values;
        })
        .catch(err => {
          setError(true);
        });
    return setData;
  }, [people, people.starships, show]);
  console.log("DATA", data);
  return (
    people && (
      <div className="Modal-main">
        <div className="modal">
          {error ? (
            <h3>Error planets :(</h3>
          ) : !error && loading ? (
            <Loading />
          ) : (
            <>
              <img src="#" alt="image-person" />
              <div className="divider" />
              <h2>{people.name}</h2>
              <p>
                Altura:
                <span>{people.height}</span>
              </p>
              <p>
                Cor dos olhos:
                <span>{people.eye_color}</span>
              </p>
              <p>
                Gênero:
                <span>{people.gender}</span>
              </p>
              <p>
                Peso:
                <span>{people.mass}</span>
              </p>
              <div className="divider" />
              {people.starships.length > 0 && <h4>Starchips</h4>}
              {data &&
                data.map((item, key) => (
                  <div className="planet-info" key={key}>
                    <p>
                      Nome:
                      <span>{item.name}</span>
                    </p>
                    <p>
                      Fabricante:
                      <span>{item.manufacturer}</span>
                    </p>
                    <p>
                      Modelo:
                      <span>{item.model}</span>
                    </p>
                    <p>
                      Tamanho:
                      <span>{item.length}</span>
                    </p>
                    <p>
                      Capacidade:
                      <span>{item.cargo_capacity}</span>
                    </p>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    )
  );
}
