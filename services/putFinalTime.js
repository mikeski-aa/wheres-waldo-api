const { PrismaClient } = require("@prisma/client");

async function putFinalTime(userid, time) {
  const prisma = new PrismaClient();

  try {
    const response = prisma.user.update({
      where: {
        id: +userid,
      },
      data: {
        gametime: +time,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { putFinalTime };
