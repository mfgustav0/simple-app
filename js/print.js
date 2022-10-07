const print = async itens => {
	const response = await fetch('http://app-simple.test/api/print.json', {
		method: 'POST',
		headers: {
		    'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(itens)
	});

	const json = await response.json();

	return {
		response,
		json
	};
};

export default print;