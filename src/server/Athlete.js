const pool = require("./db");

class Athlete {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymapaiva,
    paino,
    linkki,
    laji,
    saavutukset
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymapaiva = syntymapaiva;
    this.paino = paino;
    this.linkki = linkki;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM urheilijan_tiedot");
    return [rows, rows.length];
  }

  async save() {
    // Implementoi tietojen tallennus tietokantaan täällä
    // Käytä this-oliota tallentamaan tietoja
  }

  static async findById(athleteId) {
    const [athlete, _] = await pool.query(
      "SELECT * FROM urheilijan_tiedot WHERE id = ?",
      [athleteId]
    );
    return [athlete, athlete.length];
  }

  async update(
    athleteId,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymapaiva,
    paino,
    linkki,
    laji,
    saavutukset
  ) {
    // Implementoi tietojen päivitys tietokantaan täällä
    // Käytä this-oliota päivittämään tietoja
  }

  static async deleteAthleteById(athleteId) {
    // Implementoi urheilijan poisto tietokannasta täällä
  }
}

module.exports = Athlete;
