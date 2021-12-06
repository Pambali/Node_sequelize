const {addMovie,getMovieDeatils,MovieLimitedList,MoviesByGenre}=require("../controllers/movieController")

const movierouter = require('express').Router()

movierouter.post("/addNewMovie",addMovie)
movierouter.get("/findByGenre/",MoviesByGenre)
movierouter.get("/findById/",getMovieDeatils)
movierouter.get("/List",MovieLimitedList) 
module.exports=movierouter;