const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/info",(req,res)=>{

res.json({

hostname:os.hostname(),

environment:"Production",

version:"v4.0",

time:new Date().toLocaleString()

});

});

app.listen(PORT,()=>{

console.log(`Application running on port ${PORT}`);

});
