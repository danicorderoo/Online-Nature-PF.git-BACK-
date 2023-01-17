const express = require("express")
const clientController = require("./../controllers/clientController")

const router = express.Router()

router
    .route("/")
    .get(clientController.getAllClients)
    .post(clientController.createClient)
module.exports = router