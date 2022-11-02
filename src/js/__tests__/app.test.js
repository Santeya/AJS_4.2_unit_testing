import indicateHealth from '../app';

const playersList = [
  [{ name: 'мечник', health: 35 }, 'wounded'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 10 }, 'critical'],
];

const handler = test.each(playersList);

handler('testing healthStatement acc to points', ({ _, health }, expected) => {
  const result = indicateHealth({ _, health });
  expect(result).toBe(expected);
});
