require("dotenv").config();
const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const athleteRoutes = require("./routes/athleteRoutes");

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Lisää uusi reitti urheilijoille
app.use("/athletes", athleteRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went really wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
