import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export const connect = () => {
  //for local mongodb installation
  // mongoose.connect("mongodb://localhost/music_api");

  //for server
  mongoose.connect(
    "mongodb+srv://awaidus:1234@cluster0-spjjy.mongodb.net/test?retryWrites=true&w=majority"
  );
};
