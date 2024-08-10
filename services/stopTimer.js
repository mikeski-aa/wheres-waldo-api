const { PrismaClient } = require("@prisma/client");

// potential issue with overriding stop timer if clicked after stop.
// should not be a problem if game loop ends correctly though.
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
