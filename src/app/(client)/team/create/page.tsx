'use client';
import { createTeam } from '@/services/team.service';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
export default function TeamCreate() {
	const [isShowError, setIsShowError] = useState<boolean>(false);
	const [isMessageError, setIsMessageError] = useState<string>('');
	// api create team
	const { mutate } = useMutation({
		mutationFn: (data: { team_name: string; team_detail: string }) => createTeam(data),
	});
	// Validate
	const validate = (data: { team_name: string; team_detail: string }) => {
		if (!data.team_name && data.team_name === '') {
			setIsMessageError('Vui lòng nhập tên nhóm dịch!');
			return false;
		} else if (data.team_name.length < 5) {
			setIsMessageError('Têm nhóm phải hơn 5 ký tự!');
			return false;
		}
		return true;
	};
	// Submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.currentTarget;
		const data_form: { team_name: string; team_detail: string } = {
			team_name: target.nameteam.value,
			team_detail: target.description.value,
		};
		// validate
		if (validate(data_form)) {
			setIsShowError(false);
			// call api
			mutate(data_form);
		} else {
			setIsShowError(true);
		}
	};
	return (
		<div className='container mx-auto w-10/12'>
			<div className='mb-3 text-lg font-bold'>Tạo nhóm dịch</div>
			<div className='form-create-team'>
				<form onSubmit={handleSubmit}>
					<div className='mb-4 flex flex-col'>
						<label className='mb-2'>Tên nhóm dịch</label>
						<input
							className={`${
								isShowError ? 'mb-2 border-rose-600' : ''
							} appearance-none rounded border p-2 shadow focus:outline-none`}
							type='text'
							id='nameteam'
						/>
						{isShowError && <p className='text-sm italic text-red-500'>{isMessageError}</p>}
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
