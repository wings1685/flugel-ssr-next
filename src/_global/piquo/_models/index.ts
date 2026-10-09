import { _piquoLegend } from "./legend";
import { _piquoValtio } from "./valtio";
import { _piquoNano } from "./nano";

export const allStores = {
	piquoLegend: _piquoLegend,
	piquoValtio: _piquoValtio,
	piquoNano: _piquoNano,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
