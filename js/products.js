const getProducts = async () => {
	const url = 'http://app-simple.test/api/products.json';

	const response = await fetch(url);

	return await response.json();
};

export default getProducts;