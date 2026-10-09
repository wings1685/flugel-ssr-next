/* eslint-disable @typescript-eslint/no-unused-vars */
import { proxy } from "valtio/vanilla";
import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys, InitialValues } from "../../stores";

const values = defineStoreValues(storeNames.piquoValtio);
const serverStore = (initialValue: () => InitialValues) => proxy(initialValue());
export const _piquoValtio = {
	server: ({ piquoValtio: () => serverStore(values.initial), setPiquoValtio: (_: ExperimentStoreKeys) => {} }),
	client: () => {
		const piquoValtio = proxy(values.initial());
		const setPiquoValtio = (key: ExperimentStoreKeys) => { piquoValtio[key] = values.changed() };

		return { piquoValtio: () => piquoValtio, setPiquoValtio };
	},
};
