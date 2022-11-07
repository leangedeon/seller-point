var express = require('express');
var router = express.Router();


const main = require('../controllers/MainController');

router.get("/", (req, res, next) => main.sellForm(req, res, next));
router.post("/", (req, res, next) => main.sellFormSave(req, res, next));

router.get("/ordenes", (req, res, next) => main.orders(req, res, next));

module.exports = router;
