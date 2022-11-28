import express, { Request, Response } from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 8080;
const uri =
  "mongodb+srv://admin:admin123@hop-2.xrzll2f.mongodb.net/?retryWrites=true&w=majority";
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }

  routes(app);
});
