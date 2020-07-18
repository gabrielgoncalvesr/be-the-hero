const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Teste",
                email: "teste@gmail.com",
                whatsapp: "0 0000 0000",
                city: "Teste",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be return a exception of invalid email', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Teste",
                email: "testegmail.com",
                whatsapp: "0 0000 0000",
                city: "Teste",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('error')
        expect(response.body).toHaveProperty('statusCode');
        expect(response.body.statusCode).toBe(400);
        expect(response.body.message).toBe("\"email\" must be a valid email");
    });
})