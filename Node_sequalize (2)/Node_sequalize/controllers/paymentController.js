const {payment, sequelize,userMovies}=require("../models");
const { QueryTypes } = require('sequelize');
const moviePayment= async(req,res)=>
{
    var {userId,MovieId,movieRentType}=req.body;
    console.log(userId)
    var paymentStatus=true;
    
    try{
        var rentexpdate=await sequelize.query("SELECT DATE_ADD( NOW(), INTERVAL 30 DAY) as rentdate; ",{
            type: QueryTypes.SELECT
          })
       var userpayment= await payment.create({userId,MovieId,paymentStatus,movieRentType})
       if(userpayment.paymentStatus===true){
           let userMovieInfo={
               userId:userId,
               MovieId:MovieId,
               RentStatus:(movieRentType==="Rent")?true:false,
               RentExpireDate:rentexpdate[0].rentdate,
               BuyedStatus:(movieRentType==="Buy")?true:false
           }
         var usermovie=await userMovies.create(userMovieInfo)
       }
       return res.status(200).json({userpayment,usermovie})
    }catch(e){
        return res.status(500).json("message"+e)
    }
}
 
module.exports={
    moviePayment
}
