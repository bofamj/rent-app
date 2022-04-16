require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/auth");

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`app is listening on port ${port}`));
