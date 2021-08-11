export default function calcWindIconRotation(direction) {
  const rotation = direction + 180

  if (rotation > 360) {
    return rotation - 360
  } else {
    return rotation
  }
}
