const { Schema, model } = require('mongoose');

const Auto = new Schema({
    email: { type: String, required: true, unique: true },
    marka: { type: String, required: true },
    model: { type: String, required: true },
    modification: { type: String },
    carBody: { type: String, required: true }, // кузов авто
    engine: { type: String, required: true }, // бензин дизель электро
    engineCopacity: { type: String, required: true }, //объем двигателя
    driveUnit: { type: String, required: true }, //привод
    transmission: { type: String, required: true }, // коробка передач
    discription: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },


})


module.exports = model('Auto', Auto);