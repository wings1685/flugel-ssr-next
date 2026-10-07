"use client";

import { useState } from "react";
import { createData } from "./_models/create";
import { defaultCreateTaskValues } from "@/_global/lib/validate";
import type { CreateTaskSchema } from "@/_global/lib/validate";

export default function Form() {
	const defaultCreateValues = structuredClone({ ...defaultCreateTaskValues });
	const [ newData, setNewData ] = useState<CreateTaskSchema>(defaultCreateValues);

	const handleInput = (e: React.InputEvent & { currentTarget: HTMLInputElement }) => {
		const input = e.currentTarget;
		if (!input) return;

		setNewData(d => ({ ...d, [ input.name ]: input.value }));
	};

	const handleCreate = async (e: React.SubmitEvent) => {
		e.preventDefault();

		await createData(newData);

		setNewData(defaultCreateValues);
	};

	return (
		<div>
			<h1>Input</h1>
			<form onSubmit={ handleCreate }>
				<fieldset>
					<input type="text" name="title" value={ newData.title } onInput={ handleInput } placeholder="title..." />
				</fieldset>
				<fieldset>
					<input type="text" name="text" value={ newData.text } onInput={ handleInput } placeholder="text..." />
				</fieldset>
				<fieldset>
					<button>Add</button>
				</fieldset>
			</form>
		</div>
	)
};
