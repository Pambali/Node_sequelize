const {moviePayment}=require("../controllers/paymentController");

const payrouter=require("express").Router();

payrouter.post("/payment",moviePayment)

module.exports=payrouter