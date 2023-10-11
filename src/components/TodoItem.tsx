"use client";
type TodoItemProps = {
	title: string;
	completed: boolean;
	id: string;
	updatedAt: Date;
	createdAt: Date;
	toggleTodo: (id: string, completed: boolean) => void;
};

export default function TodoItem({
	title,
	completed,
	id,
	toggleTodo,
}: TodoItemProps) {
	return (
		<li
			key={id}
			className='flex gap-1 justify-between items-center mb-2'>
			<input
				className='cursor-pointer peer'
				type='checkbox'
				id={id}
				defaultChecked={completed}
				onChange={(e) => {
					toggleTodo(id, e.target.checked);
				}}
			/>
			<label
				htmlFor={id}
				className='peer-checked:line-through peer-checked:text-slate-500'>
				{title}{" "}
			</label>
			<span className='text-sm text-slate-300 peer-checked:line-through peer-checked:text-slate-500'>
				The {title} is {completed ? "completed" : "not completed"}
			</span>
		</li>
	);
}
