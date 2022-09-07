const express = require("express");

//creating router
const router = new express.Router();

const Product = require("../models/productList");

//Api to create new product
router.post("/product", async (req, res) => {
  try {
    const addingProducts = new Product(req.body);
    console.log(req.body);
    const insertProduct = await addingProducts.save();

    res.status(201).send(insertProduct);
    console.log("Product Added");
  } catch (e) {
    console.log("error", e);
    res.status(400).send(e);
  }
});

//Api to update product price
router.patch("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateProductI = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateProductI);
    console.log(" Price Updated successfully");
  } catch (e) {
    res.status(500).send(e);
  }
});

// Api to fetch all the products
router.get("/product", async (req, res) => {
  try {
    const _id = req.params.id;
    const getProductI = await Product.find({});
    res.send(getProductI);
    res.status(400).send(e);
  } catch (e) {
    console.log("error", e);
    res.status(400).send(e);
  }
});

module.exports = router;
