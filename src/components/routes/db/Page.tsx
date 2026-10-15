"use server";

import { buildFindQuery, fetchTasks } from "@/server/db/tasks/fetchTasks";
import Form from "@/components/features/Form/Form";
import Find from "@/components/features/Find/Find";
import List from "@/components/features/List/List";

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
