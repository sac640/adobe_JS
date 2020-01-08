let appModule = require("./app");
let handlers = require("./requestHandlers");

// console.log("Server Started");
const express = require('express');
const app = express();
app.use(express.static(__dirname))
// app.use("/",function(req,res,next){
//     console.log("MiddleWare 1");
//     next();
// });
// app.use("/",function(req,res,next){
//     console.log("MiddleWare 2");
//     next();
// });
// app.use("/",function(req,res,next){
//     console.log("MiddleWare 3");
//     next();
// });
// app.get("/",handlers.root_get);

app.listen(8000, appModule.appInit);
