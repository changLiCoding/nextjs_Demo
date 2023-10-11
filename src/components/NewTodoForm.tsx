"use client";

import React from "react";
import Link from "next/link";
import handleAddTodo from "@/action/handleAddTodo";

function NewTodoForm() {
	return (
		<form
			action={handleAddTodo}
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
	);
}

export default NewTodoForm;
