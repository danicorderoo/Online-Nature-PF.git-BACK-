const Animals = require("../models/animalsModel")

exports.getAllAnimals = async( req, res ) => {
    try{
        const animals = await Animals.find({})
        if(!animals.length) return res.status(404).send("No hay animales por aqui :C")
        
        const animal = []
        animals.map(e => {
            animal.push({
                title:e.title,
                image:e.image,
                image_detail:e.image_detail,
                description:e.description,
                amount:e.amount,
                location:e.location,
                species:e.species
            })
        })
        res.status(201).json(animal)

    }catch (error){
        res.status(400).json({
            status: "failure",
            message: error
        })
    }
}

exports.createAnimal = async ( req, res ) => {
    try{
        const {title, name, image, image_detail, description,location, species, amount } = req.body
        if (!title)
          return res.status(404).send("Pon un nombre"); 

        const newAnimal = await Animals.create({
          title,
          name,
          image,
          image_detail,
          description,
          amount,
          location,
          species,
        });
       
        res.status(201).json({
            status:"success",
            requestedAt:req.requestedAt,
            data:{
                client: newAnimal
            }
        })

    }catch (error){
        res.status(400).json({
            status: "failure",
            message: error
        })
    }
}