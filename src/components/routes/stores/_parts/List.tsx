"use client";

import { useSnapshot } from "valtio";
import { rawLegend$, setRawLegend } from "@/_global/stores/legend";
import { rawValtio, setRawValtio } from "@/_global/stores/valtio";
import { piquoStore } from "@/_global/piquo";
import { rawNano, setRawNano } from "@/_global/stores/nano";
import { useStore } from "@nanostores/react";
import { handleServerStore } from "../_models/update.server";
import { useSelector } from "@legendapp/state/react";

type Props = {
	rawLegendServer: string;
	piquoLegendServer: string;
	rawValtioServer: string;
	piquoValtioServer: string;
	rawNanoServer: string;
	piquoNanoServer: string;
};

export default function List({
	rawLegendServer, piquoLegendServer,
	rawValtioServer, piquoValtioServer,
	rawNanoServer, piquoNanoServer,
}: Props) {
	const { piquoLegend$, setPiquoLegend } = piquoStore('piquoLegend');
	const { piquoNano, setPiquoNano } = piquoStore('piquoNano');
	const { piquoValtio, setPiquoValtio } = piquoStore('piquoValtio');
	useSelector(rawLegend$.forClient);
	useSelector(piquoLegend$().forClient);
	const rawValtioClient = useSnapshot(rawValtio);
	const piquoValtioClient = useSnapshot(piquoValtio());
	const rawNanoClient = useStore(rawNano);
	const piquoNanoClient = useStore(piquoNano());

	return (
		<div>
			<h1>Raw Legend Stores</h1>
			<fieldset>
				<span>forServer: { rawLegendServer }</span>
				<button onClick={ () => handleServerStore('rawLegend') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { rawLegend$.get().forClient }</span>
				<button onClick={ () => setRawLegend('forClient') }>Click</button>
			</fieldset>
			<h1>Piquo Legend Stores</h1>
			<fieldset>
				<span>forServer: { piquoLegendServer }</span>
				<button onClick={ () => handleServerStore('piquoLegend') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { piquoLegend$().get().forClient }</span>
				<button onClick={ () => setPiquoLegend('forClient') }>Click</button>
			</fieldset>
			<h1>Raw Valtio</h1>
			<fieldset>
				<span>forServer: { rawValtioServer }</span>
				<button onClick={ () => handleServerStore('rawValtio') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { rawValtioClient.forClient }</span>
				<button onClick={ () => setRawValtio('forClient') }>Click</button>
			</fieldset>
			<h1>Piquo Valtio Store</h1>
			<fieldset>
				<span>forServer: { piquoValtioServer }</span>
				<button onClick={ () => handleServerStore('piquoValtio') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { piquoValtioClient.forClient }</span>
				<button onClick={ () => setPiquoValtio('forClient') }>Click</button>
			</fieldset>
			<h1>Raw Nano Stores</h1>
			<fieldset>
				<span>forServer: { rawNanoServer }</span>
				<button onClick={ () => handleServerStore('rawNano') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { rawNanoClient.forClient }</span>
				<button onClick={ () => setRawNano('forClient') }>Click</button>
			</fieldset>
			<h1>Piquo Nano Store</h1>
			<fieldset>
				<span>forServer: { piquoNanoServer }</span>
				<button onClick={ () => handleServerStore('piquoNano') }>Click</button>
			</fieldset>
			<fieldset>
				<span>forClient: { piquoNanoClient.forClient }</span>
				<button onClick={ () => setPiquoNano('forClient') }>Click</button>
			</fieldset>
		</div>
	)
}
