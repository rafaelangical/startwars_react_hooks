/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import api from "./services/api";
import PeopleDetails from "./Components/PeopleDetails/PeopleDetails";
import Loading from "./Components/Loading/Loading";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [people, setPeople] = useState(null);
  const getPeoples = async url => {
    setLoading(true);
    await api
      .get(url || "https://swapi.co/api/people/")
      .then(resp => {
        setData(resp.data);
        setLoading(false);
        // eslint-disable-next-line no-undef
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setError(true);
      });
  };
  useEffect(() => {
    getPeoples();
  }, []);
  useEffect(() => {}, [data]);
  useEffect(() => {}, [show]);
  const setModalVisible = item => {
    setPeople(item);
    setShow(!show);
  };
  return (
    <div className="App" onClick={() => setShow(!show)}>
      <Header title="Star Wars" className="header" />
      {error && <h3 className="error">Error :(</h3>}
      {!error && loading ? (
        <Loading />
      ) : (
        <div className="main">
          {data &&
            data.results.map((item, key) => (
              <div
                className="card-person"
                key={key}
                onClick={() => setModalVisible(item)}
              >
                <img src="#" alt="img" className="image-person-card" />
                <h2>{item.name}</h2>
              </div>
            ))}
        </div>
      )}
      <Footer onClick={() => getPeoples(data.next)} text="Carregar mais" />
      {show && people ? (
        <PeopleDetails {...props} show={show} people={people} />
      ) : null}
    </div>
  );
}

export default App;
