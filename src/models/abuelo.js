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

const PadreSchema = Schema({
    infoDeLosPadres: InfoSchema,
    hijos: []
});

const AbueloSchema = Schema({
  infoDeLosAbuelos: InfoSchema,
  padres: []
});

//Exportar el modelo
module.exports = mongoose.model('Abuelo', AbueloSchema);

//Getter and Setter

function setInfo(info) {
    this.infoDeLosAbuelos = info;
}
