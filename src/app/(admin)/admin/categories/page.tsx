'use client';

import { create_cate } from '@/services/categories.service';
import { useMutation } from '@tanstack/react-query';

import React, { useState } from 'react';

const Categories = () => {
	// api create thêm
	const { mutate } = useMutation({
		mutationFn: (data: { name: string }) => create_cate(data),
	});

	// Submit thêm
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.currentTarget;
		const data: { name: string } = {
			name: target.cat_name.value,
		};
		// call api
		mutate(data);
	};
	return (
		<div>
			<div className='p-2'>
				<h2 className='text-center text-xl md:text-5xl'>Quản lý thể loại</h2>
				{/* Đây không phải lỗi, đây là tính năng */}
				<button className='btn my-3 bg-blue-500' onClick={() => window.my_modal_3.showModal()}>
					Thêm thể loại
				</button>
			</div>
			{/* Table */}
			<div className='overflow-x-auto '>
				<table className='table table-fixed '>
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<th>Thể loại</th>
							<th>Sửa</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='flex items-center space-x-3'>
									<div>
										<div className='font-bold'>Hart Hagerty</div>
									</div>
								</div>
							</td>

							<td>
								<button className='btn bg-lime-400 md:btn-xs' onClick={() => window.my_modal_4.showModal()}>
									Sửa
								</button>
							</td>
							<th>
								<button className='btn bg-red-400 md:btn-xs'>Xóa</button>
							</th>
						</tr>
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<th>Thể loại</th>
							<th>Sửa</th>
							<th>Xóa</th>
						</tr>
					</tfoot>
				</table>
			</div>
			{/* end Table */}

			{/* modal thêm */}
			<dialog id='my_modal_3' className='modal'>
				<form method='dialog' className='modal-box ' onSubmit={handleSubmit}>
					<div className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>✕</div>
					<div>
						<h1 className='text-center'>Thêm thể loại</h1>
						<div className='flex items-center justify-between'>
							<label htmlFor='cat' className='block text-sm font-medium leading-6 text-gray-900'>
								Thể loại
							</label>
						</div>
						<div className='mt-2'>
							<input
								id='cat_name'
								name='cat'
								type='text'
								className='block w-full rounded-md border-0 px-5 py-2 text-black ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='my-3 flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
						>
							Thêm
						</button>
					</div>
				</form>
			</dialog>
			{/* end modal thêm */}

			{/* modal sửa */}
			<dialog id='my_modal_4' className='modal'>
				<form method='dialog' className='modal-box'>
					<div className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>✕</div>
					<div>
						<h1 className='text-center'>Thêm thể loại</h1>
						<div className='flex items-center justify-between'>
							<label htmlFor='cat' className='block text-sm font-medium leading-6 text-gray-900'>
								Thể loại
							</label>
						</div>
						<div className='mt-2'>
							<input
								id='cat'
								name='cat'
								type='cat'
								className='block w-full rounded-md border-0 px-5 py-2 text-black ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className=' my-3 flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
						>
							Sửa
						</button>
					</div>
				</form>
			</dialog>
			{/* end modal sửa */}
		</div>
	);
};

export default Categories;
