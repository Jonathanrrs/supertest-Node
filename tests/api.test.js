const request = require('supertest');
const app = require('../src/app');

/* testing get all users endpoint */
/* describe() para agrupar unos cuantos tests     Nos permiten ver mensajes
it()                                              en la consola
*/


describe('GET /users', () => {
    /* que responda la ruta inicial de usuarios */
    it('respond with json containing a list of all users', done => { /* tomará tiempo por lo tanto un callback */
    request(app) /* petición de app */
        .get('/users') /* pasamos la ruta */
        .set('Accept', 'application/json') /* cabecera */
        .expect('Content-Type', /json/) /* lo que venga de esta ruta sea esto, la documentación lo especifica como una expresión regular */
        .expect(200, done); /* responda código de estado */
    });
});

describe('/GET /users/:id', () => {
    it('respond with json containing a single user', done => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json') 
            .expect('Content-Type', /json/)
            .expect(200, done); 
    });

    it('respond with json user "User 0001 Found" when the user exists', done => {
        request(app)
            .get('/users/U0001')
            .set('Accept', 'application/json') 
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"User U0001 Found"') 
            .end((err) => {
                if(err) return done(err);
                done();
            });
    });

    it('respond with json user "user not found" when the user does not exists', done => {
        request(app)
            .get('/users/noexistinguser')
            .set('Accept', 'application/json') 
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"User not Found"') 
            .end((err) => {
                if(err) returndone(err);
                done();
            });
    });
});

describe("POST /users", () => {
    it('respond with 201 created', done => {
        const data = {
            username: 'jona',
            password: '1234'
        }
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(err => {
                if(err) return done(err);
                done();
            });
    });

    it('respond with code 400 on bad request', done => {
        const data = {};
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"user not created"')
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})