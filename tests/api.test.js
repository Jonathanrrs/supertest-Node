const request = require('supertest');
const app = require('../src/app');

/* testing get all users endpoint */
/* describe() para agrupar unos cuantos tests     Nos permiten ver mensajes
it()                                              en la consola
*/

/* que responda la ruta inicial de usuarios */
it('respond with json containing a list of all users', done => { /* tomará tiempo por lo tanto un callback */
    request(app) /* petición de app */
        .get('/users') /* pasamos la ruta */
        .set('Accept', 'application/json') /* cabecera */
        .expect('Content-Type', /json/) /* lo que venga de esta ruta sea esto, la documentación lo especifica como una expresión regular */
        .expect(200, done); /* responda código de estado */
});

describe