const { PrismaClient } = require("@prisma/client");
// helper function to get timing in seconds
function timeConvert(start, end) {
  const seconds = (end.getTime() - start.getTime()) / 1000;

  return seconds;
}

async function getTime(userId) {
  const prisma = new PrismaClient();
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
      select: {
        starttime: true,
        endtime: true,
      },
    });

    const time = timeConvert(response.starttime, response.endtime);

    // round seconds to 2 decimal places
    return Math.round(time * 100) / 100;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getTime };
