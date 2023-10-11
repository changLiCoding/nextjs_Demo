import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import NewTodoForm from "@/components/NewTodoForm";

// async function handleSubmit(data: FormData) {
// 	"use server";

// 	const title = data.get("title")?.valueOf();

// 	if (typeof title !== "string" || title.length === 0) {
// 		throw new Error("Title is required");
// 	}

// 	await prisma.todo.create({
// 		data: { title, completed: false },
// 	});
// 	console.log("Hello World");
// 	redirect("/");
// }

export default function New() {
	return (
		<>
			<header className='flex justify-between items-center mb-4'>
				<Link href={"/"}>
					<h1 className='text-2xl hover:bg-slate-700 rounded-xl px-3 py-1'>
						Todos
					</h1>
				</Link>
				<Link
					href='/'
					className='border border-slate-300 text-slate-300 px-2 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>
					Go Home
				</Link>
			</header>
			<div>
				<h3>Create Todo</h3>
				<NewTodoForm />
			</div>
		</>
	);
}
