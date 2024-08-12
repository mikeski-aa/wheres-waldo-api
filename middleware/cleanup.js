const { PrismaClient } = require("@prisma/client");

// middleware for cleaning up the database when user loads it.
module.exports.cleanLeaderboard = async (req, res, next) => {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.user.findMany({ where: { gametime: null } });
    let tempHolder = [];
    console.log(response);
    // compare dates, if the date of start and current date are more than 10 miutes apart, delete record.
    for (let x = 0; x < response.length; x++) {
      let today = new Date();
      const seconds =
        (today.getTime() - response[x].starttime.getTime()) / 1000;
      if (seconds > 600) {
        tempHolder.push(response[x].id);
      }
    }

    for (let x = 0; x < tempHolder.length; x++) {
      await prisma.user.delete({
        where: {
          id: tempHolder[x],
        },
      });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

// cleanLeaderboard();
