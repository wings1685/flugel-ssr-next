"use server";

import { setRawLegend } from "@/_global/stores/legend";
import { setRawValtio } from "@/_global/stores/valtio";
import { setRawNano } from "@/_global/stores/nano";
import { piquoStore } from "@/_global/piquo";
import type { StoreName } from "@/_global/stores";

export const handleServerStore = async (key: StoreName) => {
	if (key === 'rawLegend') {
		setRawLegend('forServer');
	} else if (key === 'piquoLegend') {
		const { setPiquoLegend } = piquoStore('piquoLegend');
		setPiquoLegend('forServer');
	} else if (key === 'rawValtio') {
		setRawValtio('forServer');
	} else if (key === 'piquoValtio') {
		const { setPiquoValtio } = piquoStore('piquoValtio');
		setPiquoValtio('forServer');
	} else if (key === 'rawNano') {
		setRawNano('forServer');
	} else if (key === 'piquoNano') {
		const { setPiquoNano } = piquoStore('piquoNano');
		setPiquoNano('forServer');
	}
};
