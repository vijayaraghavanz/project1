const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const port = 8050;

app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(200).json({ message: "success" });
});

app.listen(port, () => {
  console.log(`app listenting on port http://localhost:8050`);
});
