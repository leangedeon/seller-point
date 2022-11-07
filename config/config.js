"use strict";

var path 			= require('path');
var util 			= require('util');
var rootPath        = path.normalize(__dirname + '/..');
var env             = process.env.APP_ENV || 'development';

if(!env) new Error("NODE_ENV variable should be set");

const timeoutRatio = 1;
let config;

console.log("./"+env+".config.js")

config = require("./"+env+".config.js");

config.env = env;

module.exports = config.config;
