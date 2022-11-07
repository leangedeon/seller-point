"use strict"

const Q             = require('q');
// const httpClient    = require('../utils/http_client');
// const logger        = require('../utils/logger');
const config        = require('../config/config');
const mongoose      = require('mongoose');
const ObjectId      = require('mongoose').Types.ObjectId;
// const Utils         = require('../utils/utils');
const Order         = require('../models/order.model');
// const NodeCache     = require('node-cache');
// const myCache       = new NodeCache();
// const sha256        = require('sha256');
const self          = {};


/*
// Orders
================================
*/

self.addOrder = (data) => {
    let deferred = Q.defer();

    let OrderData = new Order({
        'brand': data.brand,
        'storeName': data.storeName,
        'name': data.name,
        'lastName': data.lastName,
        "email": data.email,
        "typeDoc": data.typeDoc,
        "doc": data.doc,
        "phone": data.phone,
        "street": data.street,
        "streetNumber": data.streetNumber,
        "streetFloor": data.streetFloor,
        "streetCity": data.streetCity,
        "typeInvoice": data.typeInvoice,
        "typeClient": data.typeClient,
        "sku": data.sku,
        "price": data.price,
        "discount": data.discount,
        "interest": data.interest,
        "paymentId": data.paymentId,
        "installments": data.installments,
        "totalAmount": data.totalAmount,
    });

    OrderData.save(function (err, results) {
        if (err){
            console.log("Error on service add order: ", err);
            deferred.reject(err);
        }else{
            console.log("Add order success: ", results);
            deferred.resolve(results);
        }
    });
    return deferred.promise;
};


self.removeOrder = (orderId) => { 
    let deferred = Q.defer();
    let query = { '_id': new ObjectId(orderId) }; 

    Order.remove(query,function (err, results) {
        if (err){
            console.log("Error on remove orderId: ", err);
            deferred.reject(err);
        }else{
            console.log("remove orderId success: ", results);
            deferred.resolve(results);
        }
    });
    return deferred.promise;
};

self.editOrder =  (orderId, newData) => {     

    let deferred = Q.defer();
    let updatedData = new Order({
      'brand': data.brand,
      'storeName': data.storeName,
      'name': data.name,
      'lastName': data.lastName,
      "email": data.email,
      "typeDoc": data.typeDoc,
      "doc": data.doc,
      "phone": data.phone,
      "street": data.street,
      "streetNumber": data.streetNumber,
      "streetFloor": data.streetFloor,
      "streetCity": data.streetCity,
      "typeInvoice": data.typeInvoice,
      "typeClient": data.typeClient,
      "sku": data.sku,
      "price": data.price,
      "discount": data.discount,
      "interest": data.interest,
      "paymentId": data.paymentId,
      "installments": data.installments,
      "totalAmount": data.totalAmount,
    });
    
    Order.findByIdAndUpdate(new ObjectId(orderId), {$set: updatedData}, {new:true}, function (err, results) {
        if (err){
            console.log("Edit orderId Error: ", err);
            deferred.reject(err);
        }else{
            console.log("Edit orderId Success: ", results);
            deferred.resolve(results);
        }
    });

    return deferred.promise;
};

self.getOrders = (orderId=null) => {
    
    let deferred = Q.defer();
    let response;
    let sort = { 'sort': 'created' }; 
    let query = {};
    let ordersProjection = { 
        __v: false
    };

    if(orderId!=null){ 
        query = { '_id': new ObjectId(orderId) }; 
    }
    
    Order.find(query, ordersProjection, sort, function (err, orders) {
        if (err){
            deferred.reject(err);
        }else{
            if(orderId!=null){ 
                response = orders[0]; 
            }else{ 
               response = orders; 
            }
            deferred.resolve(response);
        }
    });

    return deferred.promise;
};


module.exports = self;