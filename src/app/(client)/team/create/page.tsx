'use client';
import { createTeam } from '@/services/team.service';
import { useMutation } from '@tanstack/react-query';
import { data } from 'autoprefixer';
export default function TeamCreate() {
	// api create team
	const { mutate } = useMutation({
		mutationFn: (data: { team_name: string; team_detail: string }) => createTeam(data),
	});
	// Submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.currentTarget;
		const data_form: { team_name: string; team_detail: string } = {
			team_name: target.nameteam.value,
			team_detail: target.description.value,
		};
		// call api
		mutate(data_form);
	};
	return (
		<div className='container mx-auto w-10/12'>
			<div className='mb-3 text-lg font-bold'>Tạo nhóm dịch</div>
			<div className='form-create-team'>
				<form onSubmit={handleSubmit}>
					<div className='mb-4 flex flex-col'>
						<label className='mb-2'>Tên nhóm dịch</label>
						<input
							className='appearance-none rounded border p-2 shadow focus:outline-none'
							type='text'
							id='nameteam'
						/>
					</div>
					<div className='mb-4 flex flex-col'>
						<label className='mb-2'>Mô tả nhóm</label>
						<input
							className='appearance-none rounded border p-2 shadow focus:outline-none'
							type='text'
							id='description'
						/>
					</div>
					<div>
						<button
							type='submit'
							className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none'
						>
							Tạo nhóm
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
