function findOdd(arr) {
  let res
  for (let a of arr) {
    let count = 0
    for (let x of arr) {
      if (a === x)
        count += 1
    }
    if ( count % 2 === 1) {
      res = a
      break
    }
  }
  return res
}