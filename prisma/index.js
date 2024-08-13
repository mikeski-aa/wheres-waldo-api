const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "test") {
  prisma = {
    User: {
      create: jest.fn(),
      update: jest.fn().mockResolvedValue({
        id: 1,
        matchone: true, // or other expected fields
      }),
    },
  };
} else {
  prisma = new PrismaClient();
}

module.exports = prisma;
