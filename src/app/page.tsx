import { Suspense } from "react";
import Page from "@/components/routes/Page";
import type { ComponentProps } from "react";

type PageProps = ComponentProps<typeof Page>;

export default async function Home(props: PageProps) {
	return (
		<Suspense>
			<Page { ...props } />
		</Suspense>
	)
}
