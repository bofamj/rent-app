import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");

const fetchRalEstate = async () => {
  /* const response = await */ axios
    .get(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6",
      {
        headers: {
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          "X-RapidAPI-Key":
            "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
        },
      }
    )
    .then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    ); /* onst data = await response;
  console.log(data); */
};

fetchRalEstate();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
