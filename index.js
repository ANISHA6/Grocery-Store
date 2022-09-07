const express = require("express");

//importing db
const db = require("./config/mongoose");

const router = require("./routers/customersList");
const router1 = require("./routers/productsList");
const router2 = require("./routers/ordersList");

const app = express(); //now, we can use all the properties and method inside app

//dynamic way to giving port no.
const port = process.env.PORT || 8000;

//for using json data, we have to take the permission from express application
app.use(express.json());

//here we have to register our router
app.use(router);
app.use(router1);
app.use(router2);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
