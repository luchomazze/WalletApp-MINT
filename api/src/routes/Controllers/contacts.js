const { Favoritos, Usuario, Cuentas } = require("../../db");
require("dotenv").config();


async function addContact(req, res, next) {

    const {
        alias,
        idusuario
    } = req.body
  
   
    const account = await Cuentas.findOne({
        where: {
            alias: alias,
        },
    });

    const user = await Usuario.findOne({
        where: {
            idusuario: account.usuarioIdusuario
        }
    })

    if (user) {
        const fav = await Favoritos.create({
            alias: account.alias,
            tipo: "cuenta",
            name: user.nombre,
            lastname: user.apellidos,
            favorite_account_id: account.idcuentas,
            usuarioIdusuario: idusuario,
        })

        res.send(fav).status(200)
    }else res.send(null).status(204)
}



async function getContacts(req, res, next) {

    id = req.query.id
    console.log("controller getcontacts id ", id)


        const favs = await Favoritos.findAll({
            where: {
                usuarioIdusuario: id
            }
        })


        res.send(favs)
    

}

//esta funcionando
async function getAllContacts(req, res, next) {

    const allContacts = await Favoritos.findAll()
    res.send(allContacts)

}


module.exports = { addContact, getContacts, getAllContacts }









