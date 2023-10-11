function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			return res.status(200).json({ text: "Hello" });
		case "POST":
			// Update or create data in your database
			return res.status(200).json({ text: "Hello" });
		case "PUT":
			// Update data in your database
			return res.status(200).json({ text: "Hello" });
		case "DELETE":
			// Delete data from your database
			return res.status(200).json({ text: "Hello" });
		default:
			return res.status(405).end(`Method ${method} Not Allowed`);
	}
}

export default handler;
