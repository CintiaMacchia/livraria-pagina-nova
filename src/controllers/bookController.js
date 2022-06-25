//const db = require('../database/index')
const { Books } = require('../database/models')
const cloudinary = require('../config/cloudinary')

const imageFolder = 'images/'

const BookController = {
    async create(req, res) {

        const file = req.files[0];
        const uploadPath = await cloudinary.uploads(file.path, 'books') //2 parametros - arquivo - pasta
            //console.log(uploadPath.imageUrl)
        const newBook = await Books.create({
            ...req.body,
            //forma de upload na aplicação
            //image: imageFolder + file.filename,

            //com cloudinary
            image: uploadPath.imageUrl
        })

        //console.log(file);

        return res.status(201).json({ dadosfinais: newBook })

    }
}

module.exports = BookController