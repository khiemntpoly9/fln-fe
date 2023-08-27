'use client';
import { list_cate } from '@/services/categories.service';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
	// Lấy data categories
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: list_cate,
		retry: 1,
	});
	// Nếu chưa load xong thì hiển thị loading
	if (!data && isLoading) {
		return <div>Loading...</div>;
	}
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
						{data?.data.map((category: any) => (
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
