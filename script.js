async function sendMessage() {
	const input = document.getElementById('userInput').value.trim();
	const responseDiv = document.getElementById('response');
	if (!input) {
		responseDiv.innerHTML = 'Please enter a Product name.';
		return;
	}
	responseDiv.innerHTML = 'Generating Ideas...';
	
	const prompt = `
The user entered a product name: "${input}".

1. First, verify if it's a real product. If not, reply: "This doesn't seem to be a valid product."
2. If it is a product, check if it is recyclable or reusable.
3. If not recyclable, say: "This product is not recyclable or reusable. Please dispose of it safely."
4. If recyclable/reusable, suggest 5 to 8 creative, useful ways to recycle or reuse "${input}" in bullet points.
Keep the response short, practical, and within 10–14 lines. Do not explain too much.
`;
	
	try {
		const response = await fetch(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer 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',
					'HTTP-Referer': 'https://rahimul-islam-dev.github.io/Recycle.Ai/',
					'X-Title': 'SiteName',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: 'deepseek/deepseek-r1:free',
					messages: [{ role: 'user', content: prompt }],
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		const markdownText =
			data.choices?.[0]?.message?.content || 'No response received.';
		responseDiv.innerHTML = marked.parse(markdownText);
	} catch (error) {
		responseDiv.innerHTML = 'Error: ' + error.message;
	}
}async function sendMessage() {
	const input = document.getElementById('userInput').value.trim();
	const responseDiv = document.getElementById('response');
	if (!input) {
		responseDiv.innerHTML = 'Please enter a Product name.';
		return;
	}
	responseDiv.innerHTML = 'Generating Ideas...';
	
	const prompt = `
The user has entered the product name: "${input}".

1. Detect the language of the input (Bengali or English).
2. Reply in the same language the user used.
3. First, check if "${input}" is a real product. If not, respond politely that it's not a valid product.
4. If it's a valid product, check if it is recyclable or reusable.
5. If not recyclable, respond that it is not recyclable or reusable and suggest safe disposal methods.
6. If recyclable, suggest 5 to 8 creative and practical ways to recycle or reuse "${input}" in bullet points.
Keep the response clear, helpful, and within 10–14 lines.
`;
	
	try {
		const response = await fetch(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer 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',
					'HTTP-Referer': 'https://www.sitename.com',
					'X-Title': 'SiteName',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: 'deepseek/deepseek-r1:free',
					messages: [{ role: 'user', content: prompt }],
				}),
			},
		);
		const data = await response.json();
		console.log(data);
		const markdownText =
			data.choices?.[0]?.message?.content || 'No response received.';
		responseDiv.innerHTML = marked.parse(markdownText);
	} catch (error) {
		responseDiv.innerHTML = 'Error: ' + error.message;
	}
}