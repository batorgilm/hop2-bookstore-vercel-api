import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

export default mongoose.model("Book", BooksSchema);
