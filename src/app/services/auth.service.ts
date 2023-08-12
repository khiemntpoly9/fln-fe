import newRequest from '@/utils/newRequest';

//Login user
export const login = async (email: string, password: string) => {
	try {
		const response = await newRequest.post('auth/login', { email, password });
		// console.log(response.data.accessToken);
		newRequest.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
