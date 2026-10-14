"use client";

import { useEffect } from "react";
import { buildingData, buildPerformance } from "../_models/performance";
import type { LiPatternsProps } from "../_models/performance";

export default function Ul(props: LiPatternsProps) {
	const data = buildingData(props.number);

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
