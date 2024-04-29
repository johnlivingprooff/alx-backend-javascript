export default function cleanSet(set, startString) {
  const newSet = [];

  if (typeof startString !== 'string' || startString === '') return '';

  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      newSet.push(element.slice(startString.length));
    }
  });

  return newSet.join('-');
}
