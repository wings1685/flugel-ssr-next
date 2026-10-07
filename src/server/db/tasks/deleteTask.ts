import { globalPrisma } from "../prisma";
import { deleteTaskSchema, validateSafeParse } from "@/_global/lib/validate";
import type { DeleteTaskSchema } from "@/_global/lib/validate";

export const deleteTask = async (values: DeleteTaskSchema) => {
	const input = { id: +(values.id ?? '') };
	const result = validateSafeParse(deleteTaskSchema, input);
	if (!result.success) throw new Error('Missing fields');

	const { id } = result.output;

	await globalPrisma.$transaction(async (tx) => {
		const detail = await tx.taskDetail.findUnique({
			where: {
				taskId: id,
			},
		});
		if (!detail) throw new Error('TaskDetail Not Found.');

		await tx.taskDetail.delete({
			where: {
				id: detail.id,
			},
		});
		await tx.task.delete({
			where: {
				id: id,
			}
		});
	});

	return { success: true };
};
