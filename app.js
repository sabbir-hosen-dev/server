const express = require("express");
const phones = require("./phone.json")

const app = express();

app.get("/",(req,res) =>{
  res.send("hellow")
})
app.get("/phones",(req,res) => {
  res.send(phones)
})

app.listen(300, () => {
  console.log( "running server")
})