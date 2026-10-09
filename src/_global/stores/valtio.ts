import { proxy } from "valtio/vanilla";
import { defineStoreValues, storeNames } from "./";
import type { ExperimentStoreKeys } from "./";

const values = defineStoreValues(storeNames.rawValtio);
export const rawValtio = proxy(values.initial());
export const setRawValtio = (key: ExperimentStoreKeys) => { rawValtio[key] = values.changed() };
