import { globalPrisma } from "../prisma";
import { createTaskSchema, validateSafeParse } from "@/_global/lib/validate";
import type { CreateTaskSchema } from "@/_global/lib/validate";

export const createTask = async (values: CreateTaskSchema) => {
	const result = validateSafeParse(createTaskSchema, values);
	if (!result.success) throw new Error('Missing fields');

	const { title, text } = result.output;

	const taskData: Pick<CreateTaskSchema, 'title'> = { title };

	await globalPrisma.$transaction(async (tx) => {
		const insertedTask = await tx.task.create({ data: taskData });
		await tx.taskDetail.create({
			data: {
				taskId: insertedTask.id,
				text: text,
			}
		})
	});

	return { success: true };
};
