import { Suspense } from "react";
import Page from "@/components/routes/stores/Page";

export default async function Home() {
	return (
		<Suspense>
			<Page />
		</Suspense>
	)
}
