export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const names of Object.entries(reportWithIterator)) {
    employees.push(...names);
  }

  return employees.join(' | ');
}
