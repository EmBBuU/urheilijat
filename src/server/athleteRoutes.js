import Athlete from "./Athlete";
const express = require("express");
const router = express.Router();
const Athlete = require("./Athlete");
const pool = require("./db");

exports.getAllAthletes = async (req, res, next) => {
  try {
    const [athletes, _] = await Athlete.findAll();
    res.status(200).json({ count: athletes.length, athletes });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewAthlete = async (req, res, next) => {
  try {
    let {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymapaiva,
      paino,
      linkki,
      laji,
      saavutukset,
    } = req.body;
    let athlete = new Athlete(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymapaiva,
      paino,
      linkki,
      laji,
      saavutukset
    );
    athlete = await athlete.save();
    res.status(201).json({ message: "Athlete created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAthleteById = async (req, res, next) => {
  try {
    let athleteId = req.params.id;
    let [athlete, _] = await Athlete.findById(athleteId);
    res.status(200).json({ athlete: athlete[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

async function checkIfAthleteExists(athleteId) {
  const [existingAthlete, _] = await Athlete.findById(athleteId);
  return existingAthlete && existingAthlete.length > 0;
}

exports.updateAthleteById = async (req, res, next) => {
  try {
    const athleteId = req.params.id;
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymapaiva,
      paino,
      linkki,
      laji,
      saavutukset,
    } = req.body;
    let athlete = new Athlete(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymapaiva,
      paino,
      linkki,
      laji,
      saavutukset
    );

    // Check if the athlete exists before attempting to update
    if (!(await checkIfAthleteExists(athleteId))) {
      return res.status(404).json({ message: "Athlete not found" });
    }

    // Call the update method with individual values
    athlete = await athlete.update(
      athleteId,
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymapaiva,
      paino,
      linkki,
      laji,
      saavutukset
    );

    res.status(200).json({ message: "Athlete updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteAthleteById = async (req, res, next) => {
  try {
    const athleteId = req.params.id;

    // Check if the athlete exists before attempting to delete
    if (!(await checkIfAthleteExists(athleteId))) {
      return res.status(404).json({ message: "Athlete not found" });
    }

    // Call the deleteAthleteById method
    await Athlete.deleteAthleteById(athleteId);

    res.status(200).json({ message: "Athlete deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
