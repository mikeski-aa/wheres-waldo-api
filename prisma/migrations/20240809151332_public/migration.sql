-- CreateTable
CREATE TABLE "coordinates" (
    "id" SERIAL NOT NULL,
    "xcoord" INTEGER NOT NULL,
    "ycoord" INTEGER NOT NULL,

    CONSTRAINT "coordinates_pkey" PRIMARY KEY ("id")
);
