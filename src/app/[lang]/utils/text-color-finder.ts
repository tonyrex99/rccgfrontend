export function getContrastColor(background: string): string {
  const hexToRgb = (hex: string): number[] =>
    hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));

  const rgb: number[] = background.startsWith("#")
    ? hexToRgb(background)
    : [255, 255, 255];

  // Calculate relative luminance using the sRGB color model
  const luminance: number =
    (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Use the contrast ratio to determine the recommended text color
  const contrastRatio: number = luminance < 0.5 ? 1 : 21;

  return contrastRatio >= 4.5 ? "white" : "black";
}
