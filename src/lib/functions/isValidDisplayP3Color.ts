import Color from "colorjs.io";

export function isValidDisplayP3Color(color: string): boolean {

  // create Color object from string
	const oklchColor = new Color(color);
  // cgecks whether a colour is in gamut for a given colour space
  const isInDisplayP3= oklchColor.inGamut('p3');

  return isInDisplayP3;
}
