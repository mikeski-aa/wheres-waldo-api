const { PrismaClient } = require("@prisma/client");
const { signedCookie } = require("cookie-parser");

async function updateUser(userId, itemId) {
  const prisma = new PrismaClient();
  //   1 = waldo
  //   2 = chill ski
  //   3 = tree guy

  if (+itemId === 1) {
    try {
      const response = await prisma.user.update({
        where: {
          id: +userId,
        },
        data: {
          matchone: true,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  } else if (+itemId === 2) {
    try {
      const response = await prisma.user.update({
        where: {
          id: +userId,
        },
        data: {
          matchtwo: true,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const response = await prisma.user.update({
        where: {
          id: +userId,
        },
        data: {
          matchthree: true,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { updateUser };
