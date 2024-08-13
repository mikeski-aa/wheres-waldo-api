const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "test") {
  prisma = {
    User: {
      create: jest.fn(),
    },
  };
} else {
  prisma = new PrismaClient();
}

module.exports = prisma;
