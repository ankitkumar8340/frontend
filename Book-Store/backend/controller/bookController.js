import Book from "../models/bookModel.js";

export const getAllBooks = async(req, res)=>{
    try{
        const books = await Book.findAll();
        res.json(books);
    }catch(e){
        res.status(500).json({message:e.message});
    }
}



