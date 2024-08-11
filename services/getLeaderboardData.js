const { PrismaClient } = require("@prisma/client");

async function getLeaderboardData() {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.user.findMany({
      orderBy: {
        gametime: "ASC",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getLeaderboardData };
