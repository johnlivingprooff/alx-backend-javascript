export default function cleanSet(startString, set) {
  return set
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.slice(startString.length));
}
