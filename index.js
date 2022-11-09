import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./router.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const mongoURL =
  "mongodb+srv://neeraj:vVeJVthZSPskpFte@xenon.pzikwby.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT} and connected to mongoDB`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});
