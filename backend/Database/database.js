require("dotenv").config()
const mongoose = require("mongoose");
//database file
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.f9aqief.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) 
  .catch((err) => console.log(err)); 