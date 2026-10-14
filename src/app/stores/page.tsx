import { Suspense } from "react";
import Page from "@/components/routes/stores/Page";

export default async function Home() {
	if (process.env.NEXT_PUBLIC_BUILD_MODE === 'ssg') return null;

	return (
		<Suspense>
			<Page />
		</Suspense>
	)
}
