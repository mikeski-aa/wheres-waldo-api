const { PrismaClient } = require("@prisma/client");

module.exports.stopTime = async (userId) => {
  const prisma = new PrismaClient();
  // probably need to add something in case user is not found

  if (!userId) {
    const error = "User parameter not provided";
    return error;
  }

  try {
    const result = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        endtime: new Date(),
      },
    });

    return result;
  } catch (error) {
    next(error);
  }
};
