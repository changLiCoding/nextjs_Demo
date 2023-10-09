import { prisma } from "@/db";
import createTodo from "@/utils/createTodo";
import Link from "next/link";
import { redirect } from "next/navigation";

async function handleSubmit(data: FormData) {
	"use server";

	const title = data.get("title")?.valueOf();

	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Title is required");
	}

	await prisma.todo.create({
		data: { title, completed: false },
	});
	console.log("Hello World");
	redirect("/");
}

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
				<form
					action={handleSubmit}
					className='flex gap-2 flex-col'>
					<input
						type='text'
						name='title'
						placeholder='Title'
						className='border border-slate-300 bg-transparent rounded-lg px-2 py-1 outline-none focus-within:border-slate-100'
					/>
					<div className='flex justify-end gap-8 mt-4'>
						<Link
							className='border border-slate-300 text-slate-300 px-2 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
							href='..'>
							Cancel
						</Link>
						<button
							className='border border-slate-300 text-slate-300 px-2 py-1 rounded-xl hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
							type='submit'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
