const express = require("express");

//creating router
const router = new express.Router();

const Customer = require("../models/customerList");

//Api to create new customer
router.post("/customer", async (req, res) => {
  try {
    //Adding data to the database, feching data by postman
    const addingCustomers = new Customer(req.body);
    console.log(req.body);
    const insertCustomer = await addingCustomers.save();

    res.status(201).send(insertCustomer);
    console.log("Customer Added");
  } catch (e) {
    res.status(400).send(e);
  }
});

//Api to fetch customer list
router.get("/customer", async (req, res) => {
  try {
    const getCustomer = await Customer.find({});
    res.send(getCustomer);
  } catch (e) {
    console.log("error", e);
    res.status(400).send(e);
  }
});

module.exports = router;
