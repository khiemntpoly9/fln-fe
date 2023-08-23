import newRequest from '@/utils/newRequest';

export const createTeam = async (data: { team_name: string; team_detail: string }) => {
	try {
		const response = await newRequest.post('team/create', { ...data });
		return { data: response.data, status: response.status };
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
