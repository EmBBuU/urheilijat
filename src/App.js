import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Urheilijalista from "./components/Urheilijalista";
import LisaaUrheilija from "./components/LisaaUrheilija";
import PaivitaUrheilija from "./components/PaivitaUrheilija";
import PoistaUrheilija from "./components/PoistaUrheilija";

function App() {
  return (
    <Router>
      <div>
        <h1>Urheilijoiden Hallinta</h1>
        <Route path="/" exact component={Urheilijalista} />
        <Route path="/lisaa" component={LisaaUrheilija} />
        <Route path="/paivita/:id" component={PaivitaUrheilija} />
        <Route path="/poista/:id" component={PoistaUrheilija} />
      </div>
    </Router>
  );
}

export default App;
