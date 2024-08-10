const { PrismaClient } = require("@prisma/client");

async function checkCoords(xcoord, ycoord) {
  const prisma = new PrismaClient();
  const coordranges = {
    minx: +xcoord - 8,
    maxx: +xcoord + 8,
    miny: +ycoord - 8,
    maxy: +ycoord + 8,
  };

  try {
    const response = await prisma.coordinates.findMany();

    for (let x = 0; x < response.length; x++) {
      if (
        response[x].xcoord >= coordranges.minx &&
        response[x].xcoord <= coordranges.maxx
      ) {
        if (
          response[x].ycoord >= coordranges.miny &&
          response[x].ycoord <= coordranges.maxy
        ) {
          return console.log(response[x]);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }

    // console.log(response);
    // console.log(coordranges);
  } catch (error) {
    next(error);
  }
}
checkCoords("1456", 781);
// 1456, 781
