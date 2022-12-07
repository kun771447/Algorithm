/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  rooms.sort((a, b) => {
    const [aIndex, aSize] = a;
    const [bIndex, bSize] = b;
    return bSize - aSize;
  });
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const [index, size] = queries[i];
    let min = -1;
    for (let j = 0; j < rooms.length; j++) {
      const [rIndex, rSize] = rooms[j];
      if (rSize >= size) {
        if (min === -1) {
          min = rIndex;
        } else if (Math.abs(min - index) > Math.abs(rIndex - index)) {
          min = rIndex;
        } else if (Math.abs(min - index) === Math.abs(rIndex - index)) {
          if (min === index) {
            break;
          } else if (min > rIndex) {
            min = rIndex;
          }
        }
        if (Math.abs(min - index) === 0) {
          break;
        }
      } else {
        break;
      }
    }
    res.push(min);
  }
  return res;
};
console.log(
  closestRoom(
    [
      [1, 4],
      [2, 3],
      [3, 5],
      [4, 1],
      [5, 2],
    ],
    [[2, 4]]
  )
);
