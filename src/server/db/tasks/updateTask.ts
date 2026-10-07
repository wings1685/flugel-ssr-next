import { globalPrisma } from "../prisma";
import { taskSchema, validateSafeParse } from "@/_global/lib/validate";
import type { TaskSchema } from "@/_global/lib/validate";
import type { Task } from "#prisma/client";

export const updateTask = async (values?: TaskSchema) => {
	if (!values) throw new Error('Task Not Found.');

	const input = {
		...values,
		id: +(values.id ?? ''),
	};
	const result = validateSafeParse(taskSchema, input);
	if (!result.success) throw new Error('Missing fields');

	const { id, title, text } = result.output;
	const taskData: Pick<Task, 'title'> = { title };

	await globalPrisma.$transaction(async (tx) => {
		const detail = await tx.taskDetail.findUnique({
			where: {
				taskId: id,
			},
		});
		if (!detail) throw new Error('TaskDetail Not Found.');

		await tx.taskDetail.update({
			where: {
				id: detail.id,
			},
			data: {
				text: text,
			},
		});

		await tx.task.update({
			where: {
				id: id,
			},
			data: taskData,
		});
	});

	return { success: true };
};
