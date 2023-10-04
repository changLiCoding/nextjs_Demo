import { prisma } from "@/db";

async function getTodos() {
	const todos = await prisma.todo.findMany();
	return todos;
}

export default function useGetTodos() {
	const { data: todos, error } = useSWR("todos", getTodos);

	return {
		todos,
		isLoading: !error && !todos,
		isError: error,
	};
}
