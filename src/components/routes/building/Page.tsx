export default function Page() {
	const path = process.env.NEXT_PUBLIC_BUILD_MODE === 'ssg' ? 'ssg' : 'ssr';

	return (
		<ul>
			<li>
				<a href={ `/building/${path}_c` }>li めっちゃたくさん</a>
			</li>
			<li>
				<a href={ `/building/${path}_b` }>li たくさん</a>
			</li>
			<li>
				<a href={ `/building/${path}_a` }>li ふつう</a>
			</li>
		</ul>
	)
}
