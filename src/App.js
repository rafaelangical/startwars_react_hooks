import React, { useState, useEffect, useRef } from "react";
import api from "./services/api";
import PeopleDetails from "./PeopleDetails";
import Loading from "./Components/Loading/Loading";
import { useOnClickOutside } from "./Hooks/";
import Header from "./Components/Header/Header";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [people, setPeople] = useState(null);
  const ref = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPeoples = async url => {
    setLoading(true);
    await api
      .get(url || "https://swapi.co/api/people/")
      .then(resp => {
        setData(resp.data);
        setLoading(false);
        window.scrollTo(0, 10);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });
    return;
  };
  useEffect(() => {
    getPeoples("https://swapi.co/api/people/");
  }, []);
  useEffect(() => {}, [data]);
  const setModalVisible = item => {
    setPeople(item);
    setShow(!show);
  };
  useOnClickOutside(ref, () => setShow(false));
  return (
    <div className="App">
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
                <img
                  src="https://www.google.com/search?tbm=isch&q=car"
                  alt="img"
                  className="image-person-card"
                />
                <h2>{item.name}</h2>
              </div>
            ))}
        </div>
      )}
      <div className="button-botttom">
        <button onClick={() => getPeoples(data.next)}>Buscar mais</button>
      </div>
      {show && (
        <PeopleDetails ref={ref} {...props} show={show} people={people} />
      )}
    </div>
  );
}

export default App;
