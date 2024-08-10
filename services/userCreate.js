const { PrismaClient } = require("@prisma/client");

async function newUser() {
  const prisma = new PrismaClient();
  console.log("working");

  try {
    const response = await prisma.User.create({
      data: {
        username: "Unnamed player",
        starttime: new Date(),
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { newUser };
