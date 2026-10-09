import { loadFromServer } from "./_models/load.server";
import List from "./_parts/List";

export default async function Page() {
	const data = await loadFromServer();

	return <List { ...data } />;
};
