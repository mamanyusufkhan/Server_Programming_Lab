const bookModel = require("./../models/books");

const getBookList = (req, res) =>{
    let books = bookModel.find();
    console.log(books);
    res.render("booklist.ejs");
}

const getBookForm = (req, res) =>{
    res.render("bookForm.ejs");
}

const postBook = (req, res) =>{
    console.log(req.body)
    const data = new bookModel({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
    })
    data.save().then(()=>{
        console.log("Data Added");
    }).catch((error)=>{console.log(error)}).finally(() =>{
        res.redirect("/booklist");
    })
}

module.exports = { getBookList : getBookList , getBookForm : getBookForm, postBook : postBook};