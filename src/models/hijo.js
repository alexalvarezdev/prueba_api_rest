'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Info = require('./info');

const InfoSchema = Schema({
    numserie: Number,
    tipo_dispositivo: Number,
    id_padre: Number,
    id_abuelo: Number,
});
const HijoSchema = Schema({
    infoDeLosHijos: InfoSchema,
});

//Exportar el modelo
module.exports = mongoose.model('Hijo', HijoSchema);

//Getter and Setter

function setInfo(info) {
    this.infoDeLosHijos = info;
}
