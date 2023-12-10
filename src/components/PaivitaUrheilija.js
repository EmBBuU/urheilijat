import React, { useState, useEffect } from "react";
import axios from "axios";

const PaivitaUrheilija = ({ match, history }) => {
  const [athleteData, setAthleteData] = useState({
    etunimi: "",
    sukunimi: "",
    // Muut urheilijan tiedot tässä
  });

  useEffect(() => {
    // Haetaan urheilijan tiedot palvelimelta käyttäen urheilijan id:tä
    const fetchAthleteData = async () => {
      try {
        const response = await axios.get(`/athletes/${match.params.id}`);
        setAthleteData(response.data.athlete);
      } catch (error) {
        console.error("Virhe haettaessa urheilijan tietoja:", error);
      }
    };

    fetchAthleteData();
  }, [match.params.id]);

  const handleInputChange = (e) => {
    setAthleteData({
      ...athleteData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/athletes/${match.params.id}`, athleteData);
      console.log("Urheilija päivitetty onnistuneesti");
      // Voit lisätä tässä tarvittavat päivitykset tai navigoida takaisin listanäkymään
      history.push("/");
    } catch (error) {
      console.error("Virhe päivitettäessä urheilijaa:", error);
    }
  };

  return (
    <div>
      <h2>Päivitä Urheilija</h2>
      <form onSubmit={handleSubmit}>
        {/* Lomakekentät tässä, täytetään urheilijan tiedoilla */}
        <button type="submit">Päivitä Urheilija</button>
      </form>
    </div>
  );
};

export default PaivitaUrheilija;
