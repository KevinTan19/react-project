import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [website, setWebsite] = useState("");

  // const deleteHandler = (id) => {
  //   const filteredData = data.filter((e) => e.id !== id)
  //   setData(filteredData);
  // };

  const addHandler = (event) => {
    event.preventDefault();
    const payload = {
      name,
      restaurant,
      web: website,
    };
    setData([...data, payload]);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const restaurantChangeHandler = (event) => {
    setRestaurant(event.target.value);
  };

  const websiteChangeHandler = (event) => {
    setWebsite(event.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://burgers1.p.rapidapi.com/burgers",
      headers: {
        "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
        "X-RapidAPI-Key": "6eb8efa9bbmsh79c36eeb2171719p13b54ajsna819efc9f387",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Burger List</h1>
      {data.map((e) => {
        return (
          <>
            <p>Name: {e.name}</p>
            <p>Restaurant : {e.restaurant}</p>
            <p>Website : {e.web}</p>
            <button>delete</button>
          </>
        );
      })}

      <h1>Add Burger</h1>
      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={nameChangeHandler}
        ></input>
        <input
          type="text"
          placeholder="restaurant"
          onChange={restaurantChangeHandler}
        ></input>
        <input
          type="text"
          placeholder="website"
          onChange={websiteChangeHandler}
        ></input>
        <button type="submit">add burger</button>
      </form>
    </div>
  );
}

export default App;
