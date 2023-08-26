'use client';

import { create_cate, delete_cate, list_cate, update_cate } from '@/services/categories.service';

import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

const Categories = () => {
	const [categories, setCategories] = useState<any[]>([]);
	const [name, setName] = useState<string>('');
	const [newName, setNewName] = useState<string>('');
	const [idCat, setIdCat] = useState<number | null>(null);

	//api gọi list
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await list_cate();
				setCategories(data);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		fetchCategories();
	}, []);
	// console.log(categories);
	// api create thêm
	const { mutate } = useMutation({
		mutationFn: (name: string) => create_cate(name),
	});

	// Submit thêm
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// call api
		mutate(name);
	};

	// api sửa

	const updateMutation = useMutation({
		mutationFn: (newData: { id: number | null; newName: string }) => update_cate(newData.id, newData.newName),
	});

	const handleUpdate = async (categoriesId: number) => {
		window.my_modal_4.showModal();

		setIdCat(categoriesId);
		// console.log(idToUpdate);
	};
	// Submit thêm
	const updateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// call api
		try {
			// Gọi useMutation để thực hiện việc cập nhật
			await updateMutation.mutateAsync({ id: idCat, newName: newName });

			// Đã cập nhật thành công, bạn có thể thực hiện các thao tác cần thiết
		} catch (error) {
			console.error('Error updating category:', error);
		}
	};

	// xóa
	const handleDelete = async (categoriesId: number) => delete_cate(categoriesId);
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
						{categories?.map((category: any) => (
							<tr key={category.id_categories}>
								<th>
									<label>
										<input type='checkbox' className='checkbox' />
									</label>
								</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div>
											<div className='font-bold'>{category.name}</div>
										</div>
									</div>
								</td>

								<td>
									<button
										className='btn bg-lime-400 md:btn-xs'
										onClick={() => handleUpdate(category.id_categories)}
									>
										Sửa
									</button>
								</td>
								<th>
									<button
										className='btn bg-red-400 md:btn-xs'
										onClick={() => handleDelete(category.id_categories)}
									>
										Xóa
									</button>
								</th>
							</tr>
						))}
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
								onChange={(e) => setName(e.target.value)}
								value={name}
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
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
			{/* end modal thêm */}

			{/* modal sửa */}
			<dialog id='my_modal_4' className='modal'>
				<form method='dialog' className='modal-box' onSubmit={updateSubmit}>
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
								onChange={(e) => setNewName(e.target.value)}
								value={newName}
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
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
			{/* end modal sửa */}
		</div>
	);
};

export default Categories;
