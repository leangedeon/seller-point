"use strict"
const config      = require('../config/config');
const services      = require('../services/services');
const self        = {};


self.sellForm = (req, res) => { 
  console.log(config);
	res.render("sellForm", {});
};

self.sellFormSave = async (req, res) => { 
  try {
    console.log("data", req.body);
    const result = await services.addOrder(req.body);
    console.log("result", result);
	  
    res.render("sellForm", {data: result});

  } catch (error) {
    console.log("Error on sellFormSave: ", error);
  }
};

self.orders = async (req, res) => { 
  try {
    const orders = await services.getOrders();
    console.log("orders", orders);
	  res.render("orders", {orders: orders});
  } catch (error) {
    console.log("Error on get orders: ", error);
  }
};

module.exports = self;
