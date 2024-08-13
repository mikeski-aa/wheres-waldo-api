const request = require("supertest");
const app = require("../app");
const { updateUser, prisma } = require("../services/userUpdate");

jest.mock("../prisma/index");

describe("updating user", () => {
  beforeEach(() => {
    prisma.User.update.mockResolvedValue({
      id: 1,
      matchone: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update user", async () => {
    console.log("test enviornemnt " + process.env.NODE_ENV);
    const res = await request(app).put("/api/putuser/1").send({ id: 1 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 2 });
  });
});
