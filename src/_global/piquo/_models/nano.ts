/* eslint-disable @typescript-eslint/no-unused-vars */
import { map } from "nanostores";
import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys, InitialValues } from "../../stores";

const values = defineStoreValues(storeNames.piquoNano);
const serverStore = (createInitialValues: () => InitialValues) => map(createInitialValues());
export const _piquoNano = {
	server: { piquoNano: () => serverStore(values.initial), setPiquoNano: (_: ExperimentStoreKeys) => {} },
	client: () => {
		const piquoNano = map(values.initial());
		const setPiquoNano = (key: ExperimentStoreKeys) => piquoNano.setKey(key, values.changed());

		return { piquoNano: () => piquoNano, setPiquoNano }
	},
};
