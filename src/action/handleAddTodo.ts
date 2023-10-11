"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/db";

export default async function handleAddTodo(data: FormData) {
	const title = data.get("title")?.valueOf();

	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Title is required");
	}

	const res = await prisma.todo.create({
		data: { title, completed: false },
	});
	console.log(res);
	redirect("/");
}
