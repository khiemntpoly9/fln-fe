import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import 'animate.css';
import { useState, useEffect } from 'react';

const Sidebar = () => {
	const [isMenuOpenBtn, setIsMenuOpenBtn] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// set status menu
	const statusMenu = (status: boolean) => {
		if (status) {
			setIsMenuOpenBtn(true);
			setIsMenuOpen(true);
		} else {
			setIsMenuOpenBtn(false);
			setIsMenuOpen(false);
		}
	};

	// set default status menu
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width >= 1024) {
				setIsMenuOpenBtn(false);
				setIsMenuOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<header className='w-12/12 bg-blue-200 '>
			<div className='flex '>
				<div className='flex-start'>
					{/* button */}
					<div className='dropdown lg:hidden'>
						<label tabIndex={0} className='btn btn-circle btn-ghost'>
							{!isMenuOpenBtn ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='#fff'
									className='h-6 w-6'
									onClick={() => statusMenu(true)}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='#fff'
									className='h-6 w-6'
									onClick={() => statusMenu(false)}
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
								</svg>
							)}
						</label>
					</div>
					{/* Logo */}
					<div className='hidden h-screen w-64 bg-blue-200 lg:block'>
						<div className='p-6'>
							<h1 className='text-2xl font-semibold text-white'>Admin Panel</h1>
						</div>
						<nav className='mt-1'>
							<ul className='space-y-2'>
								<li className='pl-1'>
									<div className='collapse-arrow collapse mb-1 rounded-md bg-blue-200 text-white hover:bg-blue-300'>
										<input type='checkbox' />
										<div className='collapse-title'>
											<a className='block px-4 py-2 text-white ' href='#'>
												Thống kê
											</a>
										</div>
										<div className='collapse-content'>
											<div className='grid grid-cols-1 text-center '>
												<a href='#' className='py-2 hover:bg-blue-200'>
													Action
												</a>
												<a href='#' className='py-2 hover:bg-blue-200'>
													Action
												</a>
												<a href='#' className='py-2 hover:bg-blue-200'>
													Action
												</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<a className='block px-4 py-2 text-white hover:bg-blue-300' href='#'>
										Tài khoản
									</a>
								</li>
								<li>
									<a className='block px-4 py-2 text-white hover:bg-blue-300' href='#'>
										Nhóm dịch
									</a>
								</li>
								<li>
									<a className='block px-4 py-2 text-white hover:bg-blue-300' href='#'>
										Truyện
									</a>
								</li>
								<li>
									<a className='block px-4 py-2 text-white hover:bg-blue-300' href='#'>
										Thiết lập
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			{/* menu mobile */}
			<div
				tabIndex={0}
				className={`w-100 animate__animated animate__fadeIn animate__fast bg-slate-200 ${
					isMenuOpen ? 'block' : 'hidden'
				} lg:hidden`}
			>
				<div className='px-6 py-2'>
					<ul className='mt-2'>
						<div className='collapse-arrow collapse mb-1 rounded-md bg-slate-500 text-white'>
							<input type='checkbox' />
							<div className='collapse-title'>Thông kê</div>
							<div className='collapse-content'>
								<div className='grid grid-cols-4 text-center'>
									<a href='#'>Action</a>
									<a href='#'>Action</a>
									<a href='#'>Action</a>
									<a href='#'>Action</a>
									<a href='#'>Action</a>
									<a href='#'>Action</a>
								</div>
							</div>
						</div>
						<a className='text-white' href='#'>
							<li className='mb-1 rounded-md bg-slate-500 p-4'>Tài khoản</li>
						</a>
						<a className='text-white' href='#'>
							<li className='mb-1 rounded-md bg-slate-500 p-4'>Nhóm dịch</li>
						</a>
						<a className='text-white' href='#'>
							<li className='mb-1 rounded-md bg-slate-500 p-4'>Truyện</li>
						</a>
						<a className='text-white' href='#'>
							<li className='mb-1 rounded-md bg-slate-500 p-4'>Thiết lập</li>
						</a>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Sidebar;
