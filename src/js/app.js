export default function compareHealth(obj) {
  return obj.sort((prev, next) => next.health - prev.health);
}
