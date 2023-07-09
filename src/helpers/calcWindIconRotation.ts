export const calcWindIconRotation = (direction: number) => {
  // reverse direction for determining arrow orientation
  const rotation = direction + 180

  // normalize rotation to 0-360
  return rotation % 360
}
