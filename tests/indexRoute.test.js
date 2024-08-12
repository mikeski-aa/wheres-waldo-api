const request = require("supertest");
const express = require("express");
const app = express();
const index = require("../routes/index");

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ message: "Hello" })
    .expect(200, done);
});
