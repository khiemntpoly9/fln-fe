import newRequest from "../utils/newRequest";


//resign user

export const resign = async (full_name:string,email:string,password:string) => {
    try {
        const respose = await newRequest.post('auth/register',{full_name,email,password});
        return respose.data;
    } catch (error) {
        console.log('Error fetching:', error);
        throw error;
    }
    
}