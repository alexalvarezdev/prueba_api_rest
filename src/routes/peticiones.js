const Abuelo = require('../models/abuelo.js');
const Padre = require('../models/padre.js');
const Hijo = require('../models/hijo.js');
const Info = require('../models/info.js');

const { Router } = require('express');
const router = Router();

const peticionAbuelos = require('../json/abuelos.json');
const peticionPadres = require('../json/padres.json');
const peticionHijos = require('../json/hijos.json');

router.get('/', (req, res) => {
  let listadoHijos = [];
  let listadoPadres = [];
  let listadoAbuelos = [];

  peticionHijos.forEach(h => {
    let infoHijo = new Info();
      infoHijo.numserie = h.numserie,
      infoHijo.tipo_dispositivo = h.tipo_dispositivo,
      infoHijo.id_padre = h.id_padre,
      infoHijo.id_abuelo=h.id_abuelo
    let hijo = new Hijo();
    hijo.infoDelosHijos = infoHijo;
    listadoHijos.push(hijo.infoDelosHijos);
  });

  peticionPadres.forEach(p => {
    let infoPadre = new Info();
      infoPadre.numserie = p.numserie,
      infoPadre.tipo_dispositivo = p.tipo_dispositivo,
      infoPadre.id_padre = p.id_padre,
      infoPadre.id_abuelo=p.id_abuelo
    let padre = new Padre();
    padre.infoDeLosPadres = infoPadre;
    listadoHijos.forEach(h => {
      if (p.numserie == h.id_padre) {
        padre.hijos.push(h);
      }
    });
    listadoPadres.push(padre);
  });

  peticionAbuelos.forEach(a => {
    let infoAbuelo = new Info();
      infoAbuelo.numserie = a.numserie,
      infoAbuelo.tipo_dispositivo = a.tipo_dispositivo,
      infoAbuelo.id_padre = a.id_padre,
      infoAbuelo.id_abuelo= a.id_abuelo
    let abuelo = new Abuelo();
    abuelo.infoDeLosAbuelos = infoAbuelo;
    listadoPadres.forEach(ps => {
      if (a.numserie == ps.infoDeLosPadres.id_abuelo) {
        abuelo.padres.push(ps);
      }
    });
    listadoAbuelos.push(abuelo);
  });
  
  res.json(listadoAbuelos);
});

module.exports = router;

