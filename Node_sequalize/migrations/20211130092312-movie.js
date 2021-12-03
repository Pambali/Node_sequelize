'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('movies', {
            MovieId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
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
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('movies');

    }
};