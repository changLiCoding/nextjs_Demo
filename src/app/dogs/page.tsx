interface Dog {
	name: string;
	image: string;
	breed: string;
}

export default function Dog({ params }: { params: { id: string } }) {
	// const key = `dogs:${params.id}`;
	// const dog = await kv.get<Dog>(key);

	// async function handleSubmit(data: FormData) {
	// 	"use server";
	// 	await kv.set(key, {
	// 		name: data.get("title")?.valueOf(),
	// 		breed: data.get("breed")?.valueOf(),
	// 		image: data.get("image")?.valueOf(),
	// 	});
	// 	redirect("/");
	// }

	return (
		<div className='flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4'>
			<h1 className='text-stone-700'>Edit</h1>
			{/* <h2>Edit {dog?.name}</h2>

			<form>
				<label>Name: </label>
				<input
					type='text'
					name='title'
					defaultValue={dog?.name}
				/>
				<label>Breed: </label>
				<input
					type='text'
					name='breed'
					defaultValue={dog?.breed}
				/>
				<label>Image: </label>
				<input
					type='text'
					name='image'
					defaultValue={dog?.image}
				/>
				<button type='submit'>Submit and Continue</button>
			</form> */}
		</div>
	);
}
