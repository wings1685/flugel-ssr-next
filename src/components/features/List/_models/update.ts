"use server";

import { revalidatePath } from "next/cache";
import { updateTask } from "@/server/db/tasks/updateTask";
import type { TaskSchema } from "@/_global/lib/validate";

export const updateData = async (data?: TaskSchema) => {
	await updateTask(data);

	revalidatePath('/');
};
