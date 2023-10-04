import { prisma } from "@/db";

export default function getTodos() {
	return prisma.todo.findMany();
}
