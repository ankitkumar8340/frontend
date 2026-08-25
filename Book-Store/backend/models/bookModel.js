import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define('Book', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    bookType:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

export default Book;




