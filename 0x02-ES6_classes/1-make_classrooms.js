import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);

  const objArr = [one, two, three];

  return objArr;
}
