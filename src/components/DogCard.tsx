import Image from "next/image";

interface Dog {
	name: string;
	image: string;
	breed: string;
}

export default function DogCard({ name, image, breed }: Dog) {
	return (
		<div className='flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4'>
			<Image
				className='w-32 h-32 rounded-full'
				src={image}
				alt={name}
			/>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-2xl font-bold'>{name}</h1>
				<span className='text-xl'>{breed}</span>
			</div>
		</div>
	);
}
