const {movie,movieCast} =require("../models");

var addMovie = async(req,res) =>
{
    const{MovieName,Poster,Rating,ReleasedYear,Duration,Genre,RentAmt,BuyAmt,Description,Actors,Producers,Director,Writer}=req.body;
    try{
        const addmoviedetails=await movie.create({MovieName,Poster,Rating,ReleasedYear,Duration,Genre,RentAmt,BuyAmt,Description});
        const MovieId=addmoviedetails.MovieId;
        const addmovieCastDetails=await movieCast.create({MovieId,Actors,Producers,Director,Writer});
        return res.status(200).json(addmoviedetails);
    }catch(e){
        return res.status(500).json({"message": e});
    }
}

var getMovieDeatils = async(req,res) =>
{
    var query = require('url').parse(req.url,true).query;
    var movieId=query.id;
    console.log(movieId)
    try{
    var movieDetails=await movie.findOne({
        where: {Movieid:movieId},
        include: [{model: movieCast,as:"movieCast"}]
    })
    return res.status(200).json(movieDetails);
}catch(e){
    console.log(e)
    return res.status(500).json({"message": e});
}
}

var MovieLimitedList= async(req,res) =>{
    var query = require('url').parse(req.url,true).query;
    var movieGenre=query.genre;
    try{
        var moviesList=await movie.findAll({
            where:{Genre:movieGenre},
            limit: 2
        })
        return res.status(200).json(moviesList);
    }catch(e){
        console.log(e)
        return res.status(500).json({"message": e});
    }  
}

var MoviesByGenre= async(req,res) =>{
    var query = require('url').parse(req.url,true).query;
    var movieGenre=query.genre;
    try{
        var moviesList=await movie.findAll({
            where:{Genre:movieGenre},include: [{model: movieCast,as:"movieCast"}]
        })
        return res.status(200).json(moviesList);
    }catch(e){
        console.log(e)
        return res.status(500).json({"message": e});
    }  
}

module.exports={
    addMovie,getMovieDeatils,MovieLimitedList,MoviesByGenre
}