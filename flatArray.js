function flatArr(toFlatArr, flattedArr = []) {
  toFlatArr.map((el) => {
    if (el.nodes) {
      flatArr(el.nodes, flattedArr)
      flattedArr.push(el)
    } else {
      flattedArr.push(el)
    }
  })
  return flattedArr
}
