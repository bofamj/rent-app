require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/auth");
const connectDb = require("./db/connect");

app.use(cors());
app.use(express.json());

//*the auth router
app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 4200;

//*start the server
const start = async () => {
  try {
    //*connect to the database
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
