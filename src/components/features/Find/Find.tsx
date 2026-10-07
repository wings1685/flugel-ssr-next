"use client";

import { useRouter } from "next/navigation";
import { defaultFindValues } from "@/_global/lib/validate";
import type { FindSchema } from "@/_global/lib/validate";

export default function Find(props: FindSchema) {
	const navigate = useRouter();

	const handleFind = (e: React.SubmitEvent & { currentTarget: HTMLFormElement }) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const query = {
			title: formData.get('title')?.toString() ?? defaultFindValues.title ?? '',
			sort: formData.get('sort')?.toString() ?? defaultFindValues.sort,
		};
		const params = new URLSearchParams(query);
		navigate.push(`/?${params}`);
	};

	return (
		<div>
			<h1>Find</h1>
			<form id="find_form" onSubmit={ handleFind }>
				<fieldset>
					<input type="text" name="title" defaultValue={ props.title } onInput={ () => {} } />
					<label>
						<input type="radio" name="sort" defaultValue="asc" defaultChecked={ props.sort === 'asc' } onChange={ () => {} } />
						<span>ASC</span>
					</label>
					<label>
						<input type="radio" name="sort" defaultValue="desc" defaultChecked={ props.sort === 'desc' } onChange={ () => {} } />
						<span>DESC</span>
					</label>
					<button>Find</button>
				</fieldset>
			</form>
		</div>
	)
};
