"use server";
import { prisma } from "@/db";

export default async function handleGetTodos() {
	const todos = await prisma.todo.findMany();
	return todos;
}
