import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import CardContainer from "./components/containers/CardContainer";
import CardInformation from "./components/CardInformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/*" element={<CardContainer />} />
          <Route path="/:countryCode" element={<CardInformation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
