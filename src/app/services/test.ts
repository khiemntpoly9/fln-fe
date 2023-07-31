import newRequest from '@/utils/newRequest';

export const testProduct = async () => {
	try {
		const respose = await newRequest.get('products');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
