import type { Metadata } from "next";
import "@/_global/styles/global.sass";

export const metadata: Metadata = {
	title: 'Next SSR Test',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ja">
			<body>{ children }</body>
		</html>
	);
}
