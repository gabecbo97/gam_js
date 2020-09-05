import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.scss";
import Layout from "./Layout/Default/index";
import Banner from "./components/Banner/Banner";
import Cards  from "./components/Cards/Cards"
import Section from "./components/Section/Section"
import Help from "./components/Help/Help"



function App() {
  return (
    <div className="App">
      <Layout>
        
        <div className="container-fluid banner">
          <Banner />
        </div>
        <div className="container">
          <Cards/>
        </div>
        <Section/>
        <Help/>
      </Layout>
    </div>
  );
}

export default App;
