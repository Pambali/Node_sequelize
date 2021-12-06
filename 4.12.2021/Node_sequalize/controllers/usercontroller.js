const {user}=require("../models");


var addNewUser = async (req, resp)=> {
    var usersinfo={
        userEmail:req.body.user_mail,
         userName:req.body.username,
          userPhone:req.body.phone_no, 
          userPassword:req.body.password
    }
   // const {userEmail, userName, userPhone, userPassword} = req.body;
    try{
        const users = await user.create(usersinfo);
        return resp.status(200).json(users);

    }catch(e){
        return resp.status(500).json({"message": e});
    }
}

module.exports={
    addNewUser
}
