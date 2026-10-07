"use server";

import { revalidatePath } from "next/cache";
import { deleteTask } from "@/server/db/tasks/deleteTask";
import type { TaskSchema } from "@/_global/lib/validate";

export const deleteData = async (id: TaskSchema['id']) => {
	await deleteTask({ id });

	revalidatePath('/');
};
