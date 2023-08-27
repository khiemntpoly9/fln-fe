'use client';
import { create_cate, delete_cate, list_cate, update_cate } from '@/services/categories.service';
import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

const Categories = () => {
	const [categories, setCategories] = useState<any[]>([]);
	const [name, setName] = useState<string>('');
	const [newName, setNewName] = useState<string>('');
	const [idCat, setIdCat] = useState<number | null>(null);

	// API lấy danh sách
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
	return (
		<div className='container'>
			<div className='p-2'>
				<h2 className='text-center text-xl md:text-3xl'>Quản lý thể loại</h2>
				{/* Đây không phải lỗi, đây là tính năng */}
				<button className='btn my-3 bg-blue-500'>Thêm thể loại</button>
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
									<button className='btn bg-lime-400 md:btn-xs'>Sửa</button>
								</td>
								<th>
									<button className='btn bg-red-400 md:btn-xs'>Xóa</button>
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
		</div>
	);
};

export default Categories;
