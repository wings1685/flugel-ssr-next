import Header from "@/components/routes/_parts/Header";
import type { Metadata } from "next";
import "@/_global/styles/global.sass";

export const metadata: Metadata = {
	title: 'Next SSR Test',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ja">
			<body>
				<main>
					<Header />
					{ children }
				</main>
			</body>
		</html>
	);
}
