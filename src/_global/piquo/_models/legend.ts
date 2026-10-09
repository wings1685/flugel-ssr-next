/* eslint-disable @typescript-eslint/no-unused-vars */
import { observable } from "@legendapp/state";
import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys, InitialValues } from "../../stores";

const values = defineStoreValues(storeNames.piquoLegend);
const serverStore = (initialValue: () => InitialValues) => observable(initialValue());
export const _piquoLegend = {
	server: ({ piquoLegend$: () => serverStore(values.initial), setPiquoLegend: (_: ExperimentStoreKeys) => {} }),
	client: () => {
		const piquoLegend$ = observable(values.initial());
		const setPiquoLegend = (key: ExperimentStoreKeys) => piquoLegend$[key].set(values.changed());

		return { piquoLegend$: () => piquoLegend$, setPiquoLegend };
	},
};
