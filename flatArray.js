export default function flatArr(toFlatArr, flattedArr = []) {
  toFlatArr.map((el) => {
    if (el.nodes) {
      flatArr(el.nodes, flattedArr)
      // delete el.nodes
      flattedArr.push(el)
    } else {
      flattedArr.push(el)
    }
  })
  return flattedArr
}
