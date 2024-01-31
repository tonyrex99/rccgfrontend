export function getContrastColor(hexcolor: string): string {
  const r: number = parseInt(hexcolor.substring(1, 3), 16);
  const g: number = parseInt(hexcolor.substring(3, 5), 16);
  const b: number = parseInt(hexcolor.substring(5, 7), 16);
  const yiq: number = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "black" : "white";
}
