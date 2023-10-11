"use server";

import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

export default async function handleToggleTodo(
	id: string,
	completed: boolean
): Promise<void> {
	await prisma.todo.update({
		where: { id },
		data: { completed },
	});
	revalidatePath("/");
}
