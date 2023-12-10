import React, { useState } from "react";
import axios from "axios";

const LisaaUrheilija = () => {
  const [athleteData, setAthleteData] = useState({
    etunimi: "",
    sukunimi: "",
    // Muut urheilijan tiedot tässä
  });

  const handleInputChange = (e) => {
    setAthleteData({
      ...athleteData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/athletes", athleteData); // Olettaen, että palvelimen reitti on '/athletes'
      console.log("Urheilija lisätty onnistuneesti");
      // Voit lisätä tässä tarvittavat päivitykset, kuten lomakkeen nollaus
    } catch (error) {
      console.error("Virhe lisättäessä urheilijaa:", error);
    }
  };

  return (
    <div>
      <h2>Lisää Urheilija</h2>
      <form onSubmit={handleSubmit}>
        {/* Lomakekentät tässä */}
        <button type="submit">Lisää Urheilija</button>
      </form>
    </div>
  );
};

export default LisaaUrheilija;
