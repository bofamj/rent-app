import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Property from "./components/Property";
import ForRent from "./components/ForRent";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/property" exact element={<Property />} />
        <Route path="/property-rent" exact element={<ForRent />} />
      </Routes>
    </Router>
  );
}

export default App;
