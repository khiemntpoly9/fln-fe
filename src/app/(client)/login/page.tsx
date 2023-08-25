/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth.service';
import { Context } from '@/contexts/context';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '@/components/Loading';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

type ErrorsType = {
	eremail?: string;
	erpassword?: string;
};

type DataLogin = {
	email: string;
	password: string;
};

export default function Login() {
	const { user } = useContext(Context);
	const router = useRouter();
	const [dataForm, setDataForm] = useState<DataLogin>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<ErrorsType>({});
	// Đăng nhập
	const { mutate } = useMutation({
		mutationFn: (data: { email: string; password: string }) => login(data),
		onSuccess: () => {
			console.log('Đăng nhập thành công');
			router.push('/');
		},
	});
	// Handle input change
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataForm((prevState: DataLogin) => ({
			...prevState,
			[name]: value,
		}));
	};
	//Validate
	const validateForm = () => {
		const formErrors: { eremail: string; erpassword: string } = {
			eremail: '',
			erpassword: '',
		};
		let isValid = true;
		// Validate username
		if (!dataForm.email) {
			formErrors.eremail = 'Vui lòng nhập email!';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(dataForm.email)) {
			formErrors.eremail = 'Email phải đúng định dạng có `@` và có `.com`';
			isValid = false;
		}
		// Validate password
		if (!dataForm.password) {
			formErrors.erpassword = 'Vui lòng nhập mật khẩu vào';
			isValid = false;
		} else if (dataForm.password.length < 8) {
			formErrors.erpassword = 'Mật khẩu có ít nhất 8 ký tự';
			isValid = false;
		}
		setErrors(formErrors);
		return isValid;
	};
	// end validate
	/* Gọi đăng nhập */
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (validateForm()) {
			mutate(dataForm);
		}
	};
	// Check login
	if (user.isLogin) return router.push('/');
	// Render
	return (
		<div className='container mx-auto w-10/12 bg-white'>
			<div className='flex min-h-full flex-1 flex-col justify-center lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					{/* logo */}
					{/* <img
							className='mx-auto h-10 w-auto'
							src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
							alt='Your Company'
						/> */}
					<h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Đăng nhập</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={handleSubmit}>
						<div className='mb-2'>
							<label htmlFor='email' className='mb-2 block text-sm font-medium leading-6 text-gray-900'>
								Tài khoản
							</label>
							<div>
								<input
									id='email'
									name='email'
									value={dataForm.email}
									onChange={handleInputChange}
									className={`${
										errors && errors.eremail ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.eremail}</p>}
							</div>
						</div>
						<div className='mb-2'>
							<div className='mb-2 flex items-center justify-between'>
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
									value={dataForm.password}
									onChange={handleInputChange}
									className={`${
										errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
							</div>
						</div>
						<div className='mt-4'>
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
						<Link href='/register' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Đăng ký ngay tại đây
						</Link>
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
