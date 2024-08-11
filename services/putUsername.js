const { PrismaClient } = require("@prisma/client");

async function putUsername(userId, username) {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.user.update({
      where: {
        id: +userId,
      },
      data: {
        username: username,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { putUsername };
