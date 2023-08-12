import newRequest from '@/utils/newRequest';

export const profile = async () => {
	try {
		const respose = await newRequest.get('user/profile');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
