// const { PrismaClient } = require("@prisma/client");
const prisma = require("../prisma/index"); // importing mocked prisma

async function newUser() {
  try {
    const response = await prisma.User.create({
      data: {
        username: "Unnamed",
        starttime: new Date(),
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { newUser, prisma };

// async function newUser() {
//   // const prisma = new PrismaClient();

//   try {
//     const response = await prisma.User.create({
//       data: {
//         username: "Unnamed",
//         starttime: new Date(),
//       },
//     });

//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = { newUser };
