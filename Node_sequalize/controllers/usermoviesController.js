const {movie,movieCast,user,userMovies} =require("../models");

const getUserMovies = async(req,res)=>{
    var query = require('url').parse(req.url,true).query;
    var id=query.id;
    try{
        const mymovies=await userMovies.findAll({
            where:{userId:id},   
        })
        console.log(mymovies.dataValues.MovieId)
        const mymoviesList=await movie.findAll({
            where:{MovieId:mymovies.dataValues.MovieId},
            include: [{model: movieCast,as:"movieCast"}]
        })
        res.status(200).send(mymoviesList)
    }catch(e){
        console.log(e);
    }
}
module.exports={getUserMovies};