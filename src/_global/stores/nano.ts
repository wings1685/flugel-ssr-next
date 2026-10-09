import { map } from "nanostores";
import { defineStoreValues, storeNames } from "../stores";
import type { ExperimentStoreKeys } from "../stores";

const values = defineStoreValues(storeNames.rawNano);
export const rawNano = map(values.initial());
export const setRawNano = (key: ExperimentStoreKeys) => rawNano.setKey(key, values.changed());
