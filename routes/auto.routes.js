const { Router } = require('express');
const Auto = require('../models/Auto');


const router = Router();

// auth/auto

router.post(
    '/announcement',
    async (req, res) => {
        try {
            const { email, marka, model, modification, carBody, engine, engineCopacity, driveUnit, transmission, description, price, name, city, phoneNumber } = req.body;
            const auto = new Auto({
                email: email,
                marka:marka,
                model: model,
                modification: modification,
                carBody: carBody,
                engine:engine,
                engineCopacity: engineCopacity,
                driveUnit:driveUnit,
                transmission:transmission,
                description:description,
                price: price,
                name: name,
                city: city,
                phoneNumber: phoneNumber
            });
            await auto.save();
            res.json({message: "Объявление успешно добавлено!!!"});
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова!!!" })
        }
    }
)

module.exports = router;