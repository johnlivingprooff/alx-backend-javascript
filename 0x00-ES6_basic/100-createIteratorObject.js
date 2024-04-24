export default function* createIteratorObject(report) {
  for (const name of Object.values(report)) {
    yield name;
  }
}
