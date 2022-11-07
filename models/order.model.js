var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchema = new Schema({
    'brand': {type:String, required:true},
    'storeName': {type:String, required:true},
    'name': {type:String, required:true},
    'lastName': {type:String, required:true},
    'email': {type:String, required:true},
    'typeDoc': {type:String, required:true},
    'doc': {type:String, required:true},
    'phone': {type:String, required:true},
    'street': {type:String, required:true},
    'streetNumber': {type:String, required:true},
    'streetFloor': {type:String, required:true},
    'streetCity': {type:String, required:true},
    'typeInvoice': {type:String, required:true},
    'typeClient': {type:String, required:true},
    'sku': {type:String, required:true},
    'price': {type:String, required:true},
    'discount': {type:String, required:true},
    'interest': {type:String, required:true},
    "paymentId": {type:String, required:true},
    "installments": {type:Number, required:true},
    "totalAmount": {type:Number, required:true},
    "delivered": {type:String, required:true},
    "observations": {type:String, required:true},
    "invoiceNumber": {type:String, required:true},
    "created": {type: Date, default: Date.now},
});

module.exports = mongoose.model('Order', orderSchema);