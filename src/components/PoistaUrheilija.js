import React, { useEffect } from "react";
import axios from "axios";

const PoistaUrheilija = ({ match, history }) => {
  useEffect(() => {
    // Poista urheilija palvelimelta käyttäen urheilijan id:tä
    const deleteAthlete = async () => {
      try {
        await axios.delete(`/athletes/${match.params.id}`);
        console.log("Urheilija poistettu onnistuneesti");
        // Voit lisätä tässä tarvittavat päivitykset tai navigoida takaisin listanäkymään
        history.push("/");
      } catch (error) {
        console.error("Virhe poistettaessa urheilijaa:", error);
      }
    };

    deleteAthlete();
  }, [match.params.id, history]);

  return (
    <div>
      <h2>Poista Urheilija</h2>
      <p>Vahvista urheilijan poistaminen.</p>
    </div>
  );
};

export default PoistaUrheilija;
