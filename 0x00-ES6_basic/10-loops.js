export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (let val of array) {
    val = appendString + val;
    newArr.push(val);
  }
  return newArr;
}
