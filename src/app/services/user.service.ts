import newRequest from '@/utils/newRequest';

export const profile = async () => {
	try {
		const response = await newRequest.get('user/profile');
		return response.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
