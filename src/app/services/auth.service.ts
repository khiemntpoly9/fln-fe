
import newRequest from "../utils/newRequest";


// Register user

export const register= async (full_name:string,email:string,password:string) => {
    try {
        const respose = await newRequest.post('auth/register',{full_name,email,password});
        return respose.data;
    } catch (error) {
        console.log('Error fetching:', error);
        throw error;
    }
    
}

// Login user
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

