import React, { useState, useEffect } from "react";
import axios from "axios";

const Urheilijalista = () => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    // Tee pyyntö palvelimelle hakeaksesi urheilijatiedot
    const fetchData = async () => {
      try {
        const response = await axios.get("/athletes"); // Olettaen, että palvelimen reitti on '/athletes'
        setAthletes(response.data.athletes);
      } catch (error) {
        console.error("Virhe hakiessa urheilijoita:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Urheilijalista</h2>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            {athlete.etunimi} {athlete.sukunimi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Urheilijalista;
