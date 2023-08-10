/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';

import { useState } from 'react';
import { login } from '../services/auth.service';

import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// console.log(email, password);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const logLogin = await login(email, password);
		console.log(logLogin);
	};

	return (
		<div className='container mx-auto w-10/12 bg-white'>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					{/* logo */}
					{/* <img
						className='mx-auto h-10 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
						alt='Your Company'
					/> */}
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Đăng nhập
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
								Nhập email
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='block w-full rounded-md border-0 py-1.5 text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
									Mật khẩu
								</label>
								<div className='text-sm'>
									<a href='#' className='font-semibold text-orange-600 hover:text-orange-300'>
										Quên mật khẩu?
									</a>
								</div>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='block w-full rounded-md border-0 py-1.5 text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
							>
								Đăng nhập
							</button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Bạn chưa đăng ký?{' '}
						<a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Đăng ký ngay tại đây
						</a>
					</p>
					<hr />
					<p className='mt-3 text-center text-sm text-gray-500'>Hoặc đăng nhập bằng</p>
					<div className='flex '>
						{/* Nút đăng nhập bằng Facebook */}
						<button className='mx-2 mt-4 flex w-1/2 items-center justify-center rounded-md bg-blue-500 px-1 py-2 text-white shadow-md hover:bg-blue-600'>
							<FaFacebook className='mr-2' />
							Facebook
						</button>

						{/* Nút đăng nhập bằng Google */}
						<button className='mx-2 mt-4 flex w-1/2 items-center justify-center rounded-md bg-red-500 px-1 py-2 text-white shadow-md hover:bg-red-600'>
							<FaGoogle className='mr-2' />
							Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
