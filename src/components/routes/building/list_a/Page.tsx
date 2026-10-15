"use client";

import { useEffect } from "react";
import { buildingData, buildPerformance } from "../_models/performance";

export default function Ul() {
	const data = buildingData(10);

	useEffect(() => {
		buildPerformance();
	}, []);

	return (
		<ul>
			{data.map(item => (
				<li key={ item }>{ item }</li>
			))}
		</ul>
	)
}
