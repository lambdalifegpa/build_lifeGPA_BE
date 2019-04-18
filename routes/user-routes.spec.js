// const server = require('../api/server')
// const request = require('supertest')

// describe('user-routes.js', () => {
//     describe('GET /', () => {
//         it('should respond with 200 OK', () => {
//             return request(server)
//                 .get('/:id/habits')
//                 .then(response => {
//                     expect(response.status).toEqual(200);
//             });
//         });  

//         it("should return a response body", async () => {
//             const response = await request(server).get("/");
//             expect(response.body).toEqual(users);
//             });

//         it("should return a JSON object", async () => {
//             const response = await request(server).get("/");
//             expect(response.type).toBe("application/json");
//             });
//         });

//     describe("POST to /register", () => {
//         it.only("should return a status code of 201", async () => {
//             const response = await request(server)
//                 .post("/register")
//                 .send({ username: "josh", password: "whatever", first_name: "what", last_name: "ever"})
//                 .then(response => {
//                     expect(response.status).toEqual(201);
//                 })
//             });
//             it("should return posted data in the response body", async () => {
//               const expectedBody = { username: "Josh", password: "password", first_name: "joshh", last_name: "Diamond" };
//               const response = await request(server)
//                 .post("/")
//                 .send(expectedBody);
//               expect(response.body).toEqual(expectedBody);
//             });
//             it("should return a JSON object", async () => {
//               const expectedBody = { id: 5, name: "KLH" };
//               const response = await request(server)
//                 .post("/")
//                 .send(expectedBody);
//               expect(response.type).toBe("application/json");
//             });
//           });
//           describe("DELETE /:id", () => {
//             it("should return a status code of 200 when successfully deleted", async () => {
//               const response = await request(server).delete("/1");
//               expect(response.status).toEqual(200);
//             });
//             it("should return the ID of the deleted item", async () => {
//               const response = await request(server)
//                 .delete("/1")
//                 .send({ id: "1" });
//               expect(response.body).toEqual({ id: "1" });
//             });
//             it("should return a JSON object", async () => {
//               const response = await request(server)
//                 .delete("/1")
//                 .send({ id: "1" });
//               expect(response.type).toBe("application/json");
//             });
//           });
        
//     });