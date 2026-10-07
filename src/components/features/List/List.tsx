"use client";

import { useState } from "react";
import { updateData } from "./_models/update";
import { deleteData } from "./_models/delete";
import type { TaskSchema } from "@/_global/lib/validate";

type DataId = TaskSchema['id'];

export type Props = {
	tasks: TaskSchema[];
};

export default function List(props: Props) {
	const [ taskItems, setTaskItem ] = useState<TaskSchema[]>([ ...props.tasks ]);

	const handleInput = (e: React.InputEvent & { currentTarget: HTMLInputElement }, index: number) => {
		const input = e.currentTarget;
		if (!input) return;

		setTaskItem(prev => prev.map((t, i) => i === index ? { ...t, [ input.name ]: input.value } : t));
	};

	const handleEdit = async (id: DataId) => {
		const data = taskItems.find(d => d.id === id);
		await updateData(data);
	};

	const handleDelete = async (id: DataId) => {
		await deleteData(id);
	};

	return (
		<div>
			<h1>List</h1>
			<ul>
				{taskItems.map((task, index) => (
					<li key={ task.id }>
						<input type="text" name="title" value={ task.title } onInput={ e => handleInput(e, index) } />
						<input type="text" name="text" value={ task.text } onInput={ e => handleInput(e, index) } />
						<button type="button" onClick={ () => handleEdit(task.id) }>Edit</button>
						<button type="button" onClick={ () => handleDelete(task.id) }>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
};
