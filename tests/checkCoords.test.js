const compareCoordinates =
  require("../services/checkCoords").compareCoordinates;

describe("check coords returned are OK", () => {
  // fake DB array
  const dbArray = [
    { xcoord: 5, ycoord: 2 },
    { xcoord: 25, ycoord: 23 },
    { xcoord: -5, ycoord: -55 },
  ];

  test("undefined return", () => {
    const xcoord = -100;
    const ycoord = 1000;
    expect(compareCoordinates(dbArray, xcoord, ycoord)).toBe(undefined);
  });

  test("return first item from array", () => {
    const xcoord = 1;
    const ycoord = 1;

    expect(compareCoordinates(dbArray, xcoord, ycoord)).toStrictEqual({
      xcoord: 5,
      ycoord: 2,
    });
  });
});
