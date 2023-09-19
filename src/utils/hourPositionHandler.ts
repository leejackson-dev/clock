interface HourPosition {
  x: number;
  y: number;
}

export const hourPositionHandler = (hour: number): HourPosition => {
  const numberOfHours = 12;
  const radius = 14;
  const centerX = 15; // Half of the clock face width
  const centerY = 15; // Half of the clock face height
  const angleIncrement = 360 / numberOfHours;

  // Calculate the angle corresponding to the current hour, adjusted by 3 hours to align to the top of the clock
  const angle = ((hour - 3) * angleIncrement) % 360;

  // Convert the angle from degrees to radians
  const radians = (angle * Math.PI) / 180;

  // Calculate the x-coordinate of the hour marker's position on the clock face
  const x = centerX + radius * Math.cos(radians);

  // Calculate the y-coordinate of the hour marker's position on the clock face
  const y = centerY + radius * Math.sin(radians);

  // Return an object containing the x and y coordinates
  return { x, y };
};
