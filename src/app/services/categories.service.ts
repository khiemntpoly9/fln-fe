import newRequest from '@/utils/newRequest';

//lấy danh sách thể loại
export const list_cate = async () => {
	try {
		const response = await newRequest.get('categories/list-cate');
		return response;
	} catch (error) {
		// console.error('Error fetching:', error);
		throw error;
	}
};

//tạo thể loại
export const create_cate = async (name: string) => {
	try {
		const response = await newRequest.post('categories/create', { name });
		return { data: response.data, status: response.status };
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

//sửa thể loại
export const update_cate = async (id: number | null, name: string) => {
	try {
		// console.log(id);
		const response = await newRequest.patch(`categories/update?id=${id}`, { name });
		return { data: response.data, status: response.status };
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// xóa thể loại
export const delete_cate = async (id: number | null) => {
	try {
		// console.log(id);
		const response = await newRequest.delete(`categories/delete?id=${id}`);
		return { data: response.data, status: response.status };
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
