import newRequest from "../utils/newRequest";


//register user

export const register= async (full_name:string,email:string,password:string) => {
    try {
        const respose = await newRequest.post('auth/register',{full_name,email,password});
        return respose.data;
    } catch (error) {
        console.log('Error fetching:', error);
        throw error;
    }
    
}