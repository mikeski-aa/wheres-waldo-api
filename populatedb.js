const { PrismaClient } = require("@prisma/client");

// coordiantes:
// waldo: 1456, 781
// tree guy: 1313, 614
// skiing guy: 28, 388

async function addCoords(xcoord, ycoord, name) {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.coordinates.create({
      data: {
        name: name,
        xcoord: xcoord,
        ycoord,
        ycoord,
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function deleteRecords() {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.user.delete();

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// deleteRecords();
// addCoords(1456, 781, "Waldo");
// addCoords(1313, 614, "Tree guy");
// addCoords(28, 388, "Chill ski");
