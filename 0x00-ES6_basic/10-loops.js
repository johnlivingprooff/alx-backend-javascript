export default function appendToEachArrayValue(array, appendString) {
  for (let val of array) {
    val = appendString + val;
  }
  return array;
}
