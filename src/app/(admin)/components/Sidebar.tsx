import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import 'animate.css';
import { useState, useEffect } from 'react';

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [open, setOpen] = useState(false);
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
			<div
				className={`trasition absolute inset-y-0 left-0  -translate-x-full transform space-y-6 bg-blue-800 px-2 py-7 text-blue-100 duration-200 md:relative md:translate-x-0 ${
					open ? 'w-64' : 'w-16'
				}`}
			>
				{/* logo */}
				<div>
					<div className='flex flex-row items-center space-x-2 px-3'>
						<a href='#' className=' text-white'>
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
						</a>
						<span className={`text-2xl ${!open && 'scale-0'}`}>Admin</span>
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`absolute top-9 h-6 w-6 cursor-pointer rounded-full  border border-blue-800 bg-white text-blue-800 md:-right-3 ${
							!open && 'rotate-180'
						}`}
						onClick={() => setOpen(!open)}
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
					</svg>
				</div>

				{/* nav */}
				<nav>
					<ul className='space-y-2'>
						<li>
							<div
								className={`collapse collapse-arrow mb-1 rounded-md bg-blue-800 text-white hover:bg-blue-700`}
							>
								<input type='checkbox' className={`${!open && 'hidden'}`} />
								<div className='collapse-title flex items-center  gap-4'>
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
											d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
										/>
									</svg>
									<a
										className={`block rounded  transition duration-200   group-hover:text-white ${
											!open && 'hidden'
										}`}
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
						<li className='group flex items-center gap-4 rounded px-3 py-4 hover:bg-blue-700 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='h-6 w-6 '
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
								/>
							</svg>
							<a
								href='#'
								className={`block  transition duration-200  group-hover:text-white ${!open && 'hidden'}`}
							>
								Tài khoản
							</a>
						</li>
						<li className='group flex items-center gap-4 rounded px-3 py-4 hover:bg-blue-700 '>
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
									d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
								/>
							</svg>

							<a
								href='#'
								className={`block  transition duration-200  group-hover:text-white ${!open && 'hidden'}`}
							>
								Nhóm dịch
							</a>
						</li>
						<li className='group flex items-center gap-4 rounded px-3 py-4 hover:bg-blue-700 '>
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
									d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
								/>
							</svg>

							<a
								href='#'
								className={`block  transition duration-200  group-hover:text-white ${!open && 'hidden'}`}
							>
								Truyện
							</a>
						</li>

						<li className='group flex items-center gap-4 rounded px-3 py-4 hover:bg-blue-700 '>
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
									d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
								/>
								<path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
							</svg>

							<a
								href='#'
								className={`block  transition duration-200  group-hover:text-white ${!open && 'hidden'}`}
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
