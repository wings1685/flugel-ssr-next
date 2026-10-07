"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FindSchema } from "@/_global/lib/validate";
import type { ChangeEvent } from "react";

export default function Find(props: FindSchema) {
	const navigate = useRouter();
	const [ findData, setFindData ] = useState({ ...props });

	const handleInput = (e: (React.InputEvent | ChangeEvent) & { currentTarget: HTMLInputElement }) => {
		const input = e.currentTarget;
		if (!input) return;

		if (input.name === 'title') {
			setFindData(d => ({ ...d, title: input.value }));
		} else {
			setFindData(d => ({ ...d, sort: input.value as FindSchema['sort'] }));
		}
	};

	const handleFind = (e: React.SubmitEvent & { currentTarget: HTMLFormElement }) => {
		e.preventDefault();

		const query = {
			title: findData.title ?? '',
			sort: findData.sort ?? 'desc',
		};
		const params = new URLSearchParams(query);
		navigate.push(`/?${params}`);
	};

	return (
		<div>
			<h1>Find</h1>
			<form id="find_form" onSubmit={ handleFind }>
				<fieldset>
					<input type="text" name="title" value={ findData.title } onInput={ handleInput } />
					<label>
						<input type="radio" name="sort" value="asc" checked={ findData.sort === 'asc' } onChange={ handleInput } />
						<span>ASC</span>
					</label>
					<label>
						<input type="radio" name="sort" value="desc" checked={ findData.sort === 'desc' } onChange={ handleInput } />
						<span>DESC</span>
					</label>
					<button>Find</button>
				</fieldset>
			</form>
		</div>
	)
};
