"use server";

import { revalidatePath } from "next/cache";
import { createTask } from "@/server/db/tasks/createTask";
import type { CreateTaskSchema } from "@/_global/lib/validate";

export const createData = async (newData: CreateTaskSchema) => {
	await createTask(newData);

	revalidatePath('/');
};
