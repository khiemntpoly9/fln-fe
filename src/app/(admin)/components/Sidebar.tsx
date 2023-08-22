import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import 'animate.css';
import { useState, useEffect } from 'react';

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className='relative md:flex'>
			{/* mobile menubar */}
			<div className='bg-blue-800 text-blue-100 md:hidden'>
				{/* nav */}
				<button
					className='mobile-menu-button p-4 focus:bg-blue-700 focus:outline-none'
					onClick={toggleSidebar}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-8 w-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</div>
			{/* menu sidebar */}
			<div className=''>
				{isSidebarOpen && (
					<div className='relative h-64 w-full  md:hidden '>
						{/* Menu Items */}
						<div className='absolute left-0 z-50 w-full'>
							<ul className=' menu w-full  rounded-md  bg-base-100 shadow '>
								<li>
									<details open>
										<summary>Thống kê</summary>
										<ul>
											<li>
												<a>Action</a>
											</li>
											<li>
												<a>Action</a>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<a href='#'>Tài khoản</a>
								</li>
								<li>
									<a href='#'>Nhóm dịch</a>
								</li>
								<li>
									<a href='#'>Truyện</a>
								</li>
								<li>
									<a href='#'>Thiết lập</a>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>

			{/* sidebar */}
			<div className=' trasition absolute inset-y-0 left-0 w-64 -translate-x-full transform space-y-6 bg-blue-800 px-2 py-7 text-blue-100 duration-200 md:relative md:translate-x-0'>
				{/* logo */}
				<a href='#' className='flex items-center space-x-2 px-4 text-white'>
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
							d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
						/>
					</svg>
					<span className='text-2xl'>Admin</span>
				</a>
				{/* nav */}
				<nav>
					<ul className='space-y-2'>
						<li className='pl-1'>
							<div className='collapse collapse-arrow mb-1 rounded-md bg-blue-800 text-white hover:bg-blue-700'>
								<input type='checkbox' />
								<div className='collapse-title'>
									<a
										className='block rounded  transition duration-200  hover:bg-blue-700 hover:text-white'
										href='#'
									>
										Thống kê
									</a>
								</div>
								<div className='collapse-content'>
									<div className='grid grid-cols-1 text-center '>
										<a href='#' className='py-2 hover:bg-blue-600'>
											Action
										</a>
										<a href='#' className='py-2 hover:bg-blue-600'>
											Action
										</a>
										<a href='#' className='py-2 hover:bg-blue-600'>
											Action
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a
								className=' block rounded px-4 py-4 transition duration-200  hover:bg-blue-700 hover:text-white'
								href='#'
							>
								Tài khoản
							</a>
						</li>
						<li>
							<a
								className='block rounded px-4 py-4 transition duration-200  hover:bg-blue-700 hover:text-white'
								href='#'
							>
								Nhóm dịch
							</a>
						</li>
						<li>
							<a
								className='block rounded px-4 py-4 transition duration-200  hover:bg-blue-700 hover:text-white'
								href='#'
							>
								Truyện
							</a>
						</li>
						<li>
							<a
								className='block rounded px-4 py-4 transition duration-200  hover:bg-blue-700 hover:text-white'
								href='#'
							>
								Thiết lập
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
