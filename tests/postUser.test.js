const request = require("supertest");
const app = require("../app");
const { newUser, prisma } = require("../services/userCreate");

jest.mock("../prisma/index");

describe("POST /users", () => {
  beforeEach(() => {
    prisma.User.create.mockResolvedValue({
      id: 1,
      username: "Unnamed",
      starttime: 2004,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user", async () => {
    console.log("test enviornemnt " + process.env.NODE_ENV);
    const res = await request(app).post("/api/newuser");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      username: "Unnamed",
      starttime: 2004,
    });
  });
});
