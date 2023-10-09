import { prisma } from "@/db";
import { redirect } from "next/navigation";

export default async function createTodo(data: FormData) {
	"use server";
	const title = data.get("title")?.valueOf();
	if (typeof title !== "string" || title.length === 0)
		throw new Error("Invalid title");

	await prisma.todo.create({
		data: {
			title,
			completed: false,
		},
	});

	redirect("/");
}
