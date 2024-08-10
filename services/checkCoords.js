const { PrismaClient } = require("@prisma/client");

function compareCoordinates(dbArray, xcoord, ycoord) {
  const coordranges = {
    minx: +xcoord - 8,
    maxx: +xcoord + 8,
    miny: +ycoord - 8,
    maxy: +ycoord + 8,
  };

  console.log(dbArray.length);
  // loop to go through array. Simple array of possible coordinates hence why I'm doing a loop here instead of sorting array on DB level
  for (let x = 0; x < dbArray.length; x++) {
    if (
      dbArray[x].xcoord >= coordranges.minx &&
      dbArray[x].xcoord <= coordranges.maxx
    ) {
      if (
        dbArray[x].ycoord >= coordranges.miny &&
        dbArray[x].ycoord <= coordranges.maxy
      ) {
        return dbArray[x];
      }
    }
  }
}

module.exports.coordCompare = async function checkCoords(xcoord, ycoord) {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.coordinates.findMany();
    const compareResult = compareCoordinates(response, xcoord, ycoord);

    // if the result is undefined, return false!
    if (typeof compareResult === "undefined") {
      return false;
    }

    return compareResult;
  } catch (error) {
    console.log(error);
  }
};
// checkCoords("1456", 781);
// 1456, 781
