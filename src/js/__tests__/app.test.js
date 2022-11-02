import compareHealth from '../app';

const playersList = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedPlayersList = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('testing sorting by health', () => {
  const result = compareHealth(playersList);
  expect(result).toEqual(sortedPlayersList);
});
