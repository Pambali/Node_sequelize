const {payment, Sequelize,userMovies}=require("../models");

const moviePayment= async(req,res)=>
{
    var {userId,MovieId,movieRentType}=req.body;
    console.log(userId)
    var paymentStatus=true;
    const usermovie={};
    try{
       const userpayment= await payment.create({userId,MovieId,paymentStatus,movieRentType})
       if(userpayment.paymentStatus===true){
           let userMovieInfo={
               userId:userId,
               MovieId:MovieId,
               RentStatus:(movieRentType==="Rent")?true:false,
               RentExpireDate:Sequelize.NOW()+30,
               BuyedStatus:(movieRentType==="Buy")?true:false
           }
           usermovie=await userMovies.create(userMovieInfo)
       }
       return res.status(200).json({userpayment,usermovie})
    }catch(e){
        return res.status(500).json("message"+e)
    }
}
 
module.exports={
    moviePayment
}