'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = Schema({
    numserie: Number,
    tipo_dispositivo: Number,
    id_padre: Number,
    id_abuelo: Number,
});

//Exportar el modelo
module.exports = mongoose.model('Info', InfoSchema);

//Getter and Setter

function setNumSerie(numserie) {
    this.numserie = numserie;
}

function setTipoDispositivo(tipo_dispositivo) {
    this.tipo_dispositivo = tipo_dispositivo;
}

function setIdPadre(id_padre) {
    this.id_padre = id_padre;
}

function setIdAbuelo(id_abuelo) {
    this.id_abuelo = id_abuelo;
}

