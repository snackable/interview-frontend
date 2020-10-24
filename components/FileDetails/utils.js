export function toSeconds(milliseconds) {
  return milliseconds / 1000;
}

/**
 * Homegrown milliseconds to HH:MM:SS.sss formatter
 */
export function toHMS(milliseconds) {
  const seconds = toSeconds(milliseconds);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = (minutes - hours * 60).toString().padStart(2, "0");
  const [fullSeconds, decimalSeconds] = (seconds - minutes * 60)
    .toFixed(2)
    .split(".");
  const secondsString = [fullSeconds.padStart(2, "0"), decimalSeconds].join(
    "."
  );

  return `${hoursString}:${minutesString}:${secondsString}`;
}
