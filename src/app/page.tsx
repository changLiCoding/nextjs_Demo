import Link from "next/link";

import TodoItem from "@/components/TodoItem";
import handleGetTodos from "@/action/handleGetTodos";
import handleToggleTodo from "@/action/handleToggleTodo";

// async function toggleTodo(id: string, completed: boolean): Promise<void> {
// 	"use server";
// 	await prisma.todo.update({
// 		where: { id },
// 		data: { completed },
// 	});

// 	revalidatePath("/");
// }

export default async function Home() {
	const todos = await handleGetTodos();

	return (
		<>
			<header className='flex justify-between items-center mb-4'>
				<Link href={"/"}>
					<h1 className='text-2xl hover:bg-slate-700 rounded-xl px-3 py-1'>
						Todos
					</h1>
				</Link>
				<Link
					href='/new'
					className='border border-slate-300 text-slate-300 px-2 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>
					Go New
				</Link>
			</header>
			<main>
				<ul className='pl-4'>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							{...todo}
							toggleTodo={handleToggleTodo}
						/>
					))}
				</ul>
				<h1>hi</h1>
			</main>
		</>
	);
}
