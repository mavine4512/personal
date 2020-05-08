import React from "react";
import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
