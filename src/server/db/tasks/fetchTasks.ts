import { connection } from "next/server";
import { globalPrisma } from "../prisma";
import { Prisma } from "#prisma/client";
import { defaultFindValues, findSchema, validateParse } from "@/_global/lib/validate";
import type { FindSchema } from "@/_global/lib/validate";

export const buildFindQuery = (params: Record<string, string | string[] | undefined>) => {
	const findQuery = {
		title: params.title ?? defaultFindValues.title,
		sort: params.sort ?? defaultFindValues.sort,
	} as FindSchema;

	validateParse(findSchema, findQuery);

	return findQuery;
};

export const fetchTasks = async (findQuery: FindSchema) => {
	const whereClause: Prisma.TaskWhereInput = {};
	let orderByClause: Prisma.TaskOrderByWithRelationInput = {
		updatedAt: 'desc',
	};

	if (findQuery.title) {
		whereClause.title = {
			contains: findQuery.title,
		};
	}

	if (findQuery.sort === 'asc') {
		orderByClause = {
			updatedAt: 'asc',
		};
	}

	await connection();

	const result = await globalPrisma.task.findMany({
		where: whereClause,
		orderBy: orderByClause,
		select: {
			id: true,
			title: true,
			taskDetail: {
				select: {
					text: true,
				},
			},
		},
	});

	return result.map(item => ({
		id: item.id,
		title: item.title,
		text: item.taskDetail?.text ?? '',
	}));
};
