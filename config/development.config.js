"use strict";

let self      = {};
var base_url  = process.env.APP_BASE_URL || 'http://localhost:3001';

console.log("Success Load Development Configuration!");
self.config = {
  mongo_uri_connect : 'mongodb+srv://mainstage:mainstageClient2020@cluster0.uuvm7.mongodb.net/mainstage?retryWrites=true&w=majority',
  emailAccountUser: 'madstag3@gmail.com',
  emailAccountPassword: 'm4dst4ge!',
  sourcePath : base_url+"/statics"
};

module.exports = self;