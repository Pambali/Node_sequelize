module.exports = (sequelize, DataTypes) => {

    const movie = sequelize.define("movie", {
        MovieId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        MovieName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Poster: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Rating:{
            type:DataTypes.FLOAT
        },
        ReleasedYear: {
            type: DataTypes.INTEGER
        },
        Duration: {
            type: DataTypes.INTEGER
        },
        Genre: {
            type: DataTypes.STRING
        },
        RentAmt: DataTypes.INTEGER,
        BuyAmt: DataTypes.INTEGER,
        Description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })

    return movie

}