const { PrismaClient } = require("@prisma/client");

async function stopTimer(userId) {
  const prisma = new PrismaClient();

  try {
    const result = await prisma.user.update({
      where: {
        id: +userId,
      },
      data: {
        endtime: new Date(),
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { stopTimer };
