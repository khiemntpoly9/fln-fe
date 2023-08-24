import newRequest from '../utils/newRequest';

// Register user
export const register = async (data: { full_name: string; email: string; password: string }) => {
	try {
		const response = await newRequest.post('auth/register', { ...data });
		return response.data;
	} catch (error) {
		// console.log('Error fetching:', error);
		throw error;
	}
};

// Login user
export const login = async (email: string, password: string) => {
	try {
		const response = await newRequest.post('auth/login', { email, password });
		newRequest.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		// console.error('Error fetching:', error);
		throw error;
	}
};

// Logout user
export const logout = async () => {
	try {
		const response = await newRequest.post('auth/logout');
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		// console.error('Error fetching:', error);
		throw error;
	}
};

// Check login
export const checkLogin = async () => {
	try {
		const response = await newRequest.get('auth/check');
		return { data: response.data, status: response.status };
	} catch (error) {
		// console.error('Error fetching:', error);
		throw error;
	}
};

// Refresh token
export const refreshToken = async () => {
	try {
		const response = await newRequest.post('auth/refresh');
		// console.log(response.data.accessToken);
		newRequest.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
		return { data: response.data, status: response.status };
	} catch (error) {
		throw error;
	}
};
