const { PrismaClient } = require("@prisma/client");

async function checkWin(userId) {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.user.findUnique({
      where: {
        id: +userId,
        matchone: true,
        matchtwo: true,
        matchthree: true,
      },
    });

    if (response === null) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { checkWin };
