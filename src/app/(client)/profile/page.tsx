/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { profile } from '@/services/user.service';
import { useContext } from 'react';
import { Context } from '@/contexts/context';

const ProfileUser = () => {
	// Status login
	const router = useRouter();
	const { user } = useContext(Context);
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: profile,
	});
	// Nếu chưa đăng nhập thì chuyển về trang login
	if (user.isLogin === false) {
		return router.push('login');
	}
	// Nếu chưa load xong thì hiển thị loading
	if (!data && isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div className='container mx-auto mt-4 w-10/12'>
			{/* Breadcrumbs */}
			<div className='breadcrumbs text-sm'>
				<ul>
					<li>
						<Link href='/' className='rounded	bg-zinc-700 p-2 text-white' style={{ textDecoration: 'none' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
								/>
							</svg>
							Trang chủ
						</Link>
					</li>
					<li>
						<a style={{ textDecoration: 'none' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
							User
						</a>
					</li>
				</ul>
			</div>
			{/* End Breadcrumbs */}
			<div className='mt-2'>
				{/* avata*/}
				<div className='mb-5 flex items-center justify-center'>
					<img
						src='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
						alt=''
						className='h-28 w-28 rounded-full md:h-44 md:w-44'
					/>
				</div>
				{/* end avatar */}
				<div className=' md:m-auto md:w-96 lg:m-auto'>
					{/* thanh công cụ */}
					<div className='flex space-x-20 '>
						<div className='tt flex-1 rounded-tr-lg bg-gray-300 '>
							<div className='break-words px-1 py-1 text-center text-sm font-normal text-black  md:text-base'>
								Thông tin tài khoản
							</div>
						</div>
						<div className='flex items-center'>
							<div className='text-sm md:text-base'>Chỉnh sửa</div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
								/>
							</svg>
						</div>
					</div>
					{/* end thanh công cụ */}
					<div className='mb-5 mt-5 '>
						<div className='py-1 text-sm  md:text-base'>Tên tài khoản: {data?.full_name}</div>
						<div className='py-1 text-sm md:text-base'>Email: {data?.email}</div>
						<div className='py-1  text-sm md:text-base'>Tham gia: {data?.created_at?.slice(0, 10)}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileUser;
