export default function hasValuesFromArray(set, arry) {
  return arry.every((value) => set.has(value));
}
