import newRequest from '@/utils/newRequest';

//lấy danh sách thể loại
export const list_cate = async () => {
	try {
		const response = await newRequest.get('categories/list-cate');
		return { data: response.data, status: response.status };
	} catch (error) {
		// console.error('Error fetching:', error);
		throw error;
	}
};

//tạo thể loại
export const create_cate = async (data: { name: string }) => {
	try {
		const response = await newRequest.post('categories/create', { ...data });
		return { data: response.data, status: response.status };
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
