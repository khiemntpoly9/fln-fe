import newRequest from '@/utils/newRequest';

//Login user
export const login = async (email: string, password: string) => {
	try {
		const respose = await newRequest.post('auth/login', { email, password });
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
