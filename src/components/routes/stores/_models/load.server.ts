"use server";

import { snapshot } from "valtio/vanilla";
import { rawLegend$ } from "@/_global/stores/legend";
import { rawValtio } from "@/_global/stores/valtio";
import { rawNano } from "@/_global/stores/nano";
import { piquoStore } from "@/_global/piquo";

export const loadFromServer = async () => {
	const { piquoLegend$ } = piquoStore('piquoLegend');
	const { piquoValtio } = piquoStore('piquoValtio');
	const { piquoNano } = piquoStore('piquoNano');

	return {
		rawLegendServer: rawLegend$.forServer.get(), piquoLegendServer: piquoLegend$().get().forServer,
		rawValtioServer: snapshot(rawValtio).forServer, piquoValtioServer: snapshot(piquoValtio()).forServer,
		rawNanoServer: rawNano.get().forServer, piquoNanoServer: piquoNano().get().forServer,
	};
};
