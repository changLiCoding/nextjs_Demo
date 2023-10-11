function handler(req, res) {
	const { method, query } = req;

	switch (method) {
		case "GET":
			return res.status(200).json({ text: "userdetail" });
		case "POST":
			// Update or create data in your database
			return res.status(200).json({ text: "userdetail" });
		case "PUT":
			// Update data in your database
			return res.status(200).json({ text: "userdetail" });
		case "DELETE":
			// Delete data from your database
			return res.status(200).json({ text: "userdetail" });
		default:
			return res.status(405).end(`Method ${method} Not Allowed`);
	}
}

export default handler;
