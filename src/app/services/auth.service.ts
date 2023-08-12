import newRequest from '@/utils/newRequest';

//Login user
export const login = async (email: string, password: string) => {
	try {
		const respose = await newRequest.post('auth/login', { email, password });
		return {
			data: respose.data,
			status: respose.status,
		};
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
