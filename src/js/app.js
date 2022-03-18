export default function canIterate(obj) {
  try {
    return obj[Symbol.iterator];
  } catch (err) {
    return false;
  }
}
