const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/EcommerceAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database :: MongoDB");
  })
  .catch((e) => {
    console.log(" Error connecting to MongoDB", e);
  });
