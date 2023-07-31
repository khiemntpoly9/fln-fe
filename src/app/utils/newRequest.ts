import axios from 'axios';

const newRequest = axios.create({
	baseURL: 'http://localhost:8080/api/',
	withCredentials: true,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default newRequest;
