const server = require('../api/server')
const request = require('supertest')

describe('habit-routes.js', () => {
    describe('GET /', () => {
        it("should return a GET response", async () => {
            const response = await request(server).get("/")
            expect(response.status).toEqual(200);
            });
        })
    describe('POST /', () => {
        it("should return a POST body", async () => {
            const response = await request(server).post("/")
            expect(response.status).toEqual(404);
            });
        })
    describe('DELETE /', () => {
        it("should return a response", async () => {
            const response = await request(server).delete("/1")
            expect(response.status).toEqual(404);
            });
        })
    describe('PUT /', () => {
        it("should return a POST body", async () => {
            const response = await request(server).put("/1")
            expect(response.status).toEqual(404);
            });
        })
       
        
    });