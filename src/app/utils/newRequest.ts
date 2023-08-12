import axios from 'axios';

const newRequest = axios.create({
	baseURL: 'http://localhost:8080/api/',
	withCredentials: true,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Interceptor để gọi refreshToken khi token hết hạn
newRequest.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				// Gọi refreshToken ở đây và cập nhật token mới
				const refreshedToken = await newRequest.post('auth/refresh');
				if (refreshedToken) {
					newRequest.defaults.headers.common['Authorization'] = `Bearer ${refreshedToken.data.accessToken}`;
					originalRequest.headers['Authorization'] = `Bearer ${refreshedToken.data.accessToken}`;
					return newRequest(originalRequest);
				}
			} catch (refreshError) {
				// Xử lý lỗi khi không thể refresh token
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export default newRequest;
