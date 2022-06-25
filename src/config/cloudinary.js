const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'dthjqlpf7',
    api_key: '883992629484295',
    api_secret: 'TezRkNh9Bs_g5oCjDmSb37ORMDk'
});


//método que vai executar o upload no cloudinary
// esperar um promessa
//config tipo de resuldados que queremos

exports.uploads = (file, folder) => {
    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                //arquivo-file
                file,
                //callback com resolve
                (cloudinaryReturn) => { //RETORNO DO CLOUDINARY
                    resolve({
                        //URL da images
                        imageUrl: cloudinaryReturn.url
                    })
                },
                //config (salvar)dentro do cloudinary
                {
                    folder: folder,
                    resource_type: 'auto'
                }
            )
        }
    )
}