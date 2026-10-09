import { observable } from "@legendapp/state";
import { defineStoreValues, storeNames } from "./";
import type { ExperimentStoreKeys } from "./";

const values = defineStoreValues(storeNames.rawLegend);
export const rawLegend$ = observable(values.initial());
export const setRawLegend = (key: ExperimentStoreKeys) => rawLegend$[key].set(values.changed());
