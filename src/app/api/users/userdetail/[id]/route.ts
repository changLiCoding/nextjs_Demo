// function handler(req, res) {
// 	const { method, query } = req;

import { NextResponse } from "next/server";

// 	switch (method) {
// 		case "GET":
// 			return res.status(200).json({ text: `userdetail ${query.id}` });
// 		case "POST":
// 			// Update or create data in your database
// 			return res.status(200).json({ text: `userdetail ${query.id}` });
// 		case "PUT":
// 			// Update data in your database
// 			return res.status(200).json({ text: `userdetail ${query.id}` });
// 		case "DELETE":
// 			// Delete data from your database
// 			return res.status(200).json({ text: `userdetail ${query.id}` });
// 		default:
// 			return res
// 				.status(405)
// 				.end(`Method ${method} with id ${query.id} Not Allowed`);
// 	}
// }

// export default handler;
export async function GET(req: Request, { params }) {
	const { method } = req;
	console.log(method);
	console.log(params);

	return NextResponse.json({
		text: `userdetail for id ${params.id}`,
		id: params.id,
	});
}

export async function POST(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const { method } = req;
	return NextResponse.json({
		text: `userdetail for id ${params.id}`,
		id: params.id,
	});
}
