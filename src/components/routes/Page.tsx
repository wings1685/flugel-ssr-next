"use server";

import { buildFindQuery, fetchTasks } from "@/server/db/tasks/fetchTasks";
import Form from "../features/Form/Form";
import Find from "../features/Find/Find";
import List from "../features/List/List";

type Props = PageProps<'/'>;

const getTasks = async (params: Awaited<Props['searchParams']>) => {
	const findQuery = buildFindQuery(params);
	const tasks = await fetchTasks(findQuery);

	return { tasks, findQuery };
};

export default async function Page(props: Props) {
	const params = await props.searchParams;
	const data = await getTasks(params);

	return (
		<div>
			<Form />
			<Find { ...data.findQuery } />
			<List key={ JSON.stringify(data.tasks) } tasks={ data.tasks } />
		</div>
	)
};
