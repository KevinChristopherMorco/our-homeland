import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import CardContainer from "./components/containers/CardContainer";
import CardInformation from "./components/CardInformation";

function App() {
  return (
    <>
      <Header />
      {/* <CardInformation /> */}
      <CardContainer />
    </>
  );
}

export default App;
