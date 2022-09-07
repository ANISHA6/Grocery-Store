const express = require("express");

//creating router
const router = new express.Router();

const Customer = require("../models/customerList");
const Order = require("../models/orderList");

//Api to create new order list
router.post("/orderlist", async (req, res) => {
  try {
    //Adding data to the database, feching data by postman
    const addingOrders = new Order(req.body);
    console.log(req.body);
    const insertOrder = await addingOrders.save();

    res.status(201).send(insertOrder);
    console.log("Order List Added");
  } catch (e) {
    res.status(400).send(e);
  }
});

//Api to fetch specific customer order list
router.get("/specificcustomerol", async (req, res) => {
  try {
    const getOrderList = await Order.find({});
    res.send(getOrderList);
  } catch (e) {
    console.log("error", e);
    res.status(400).send(e);
  }
});

module.exports = router;
