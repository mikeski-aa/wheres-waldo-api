const request = require("supertest");
const express = require("express");
const app = express();
const apiRouter = require("../routes/api");

app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRouter);

test("api route works", (done) => {
  request(app)
    .get("/api")
    .expect("Content-Type", /json/)
    .expect({ message: "API called" })
    .expect(200, done);
});
