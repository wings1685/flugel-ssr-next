import Link from "next/link";

export default function Header() {
	return (
		<nav id="nav_global">
			<Link href="/">Home</Link>
			<Link href="/db">DB</Link>
			<Link href="/stores">Stores</Link>
			<Link href="/building">Building</Link>
		</nav>
	)
}
