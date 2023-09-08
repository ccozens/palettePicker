export interface SwatchType {
	lightness: number;
	chroma: number;
	hue: number;
}

export interface SwatchesType {
	[key: string]: SwatchType;
}
