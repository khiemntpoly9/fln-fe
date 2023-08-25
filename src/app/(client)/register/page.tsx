/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '@/contexts/context';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { register } from '@/services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';

type DataRegister = {
	full_name: string;
	email: string;
	password: string;
	repeactpass: string;
};

type ErrorsType = {
	erFullname?: string;
	erEmail?: string;
	erPassword?: string;
	erRepeactPass?: string;
};

export default function Register() {
	const { user } = useContext(Context);
	const [errors, setErrors] = useState<ErrorsType>({});
	const [dataForm, setDataForm] = useState<DataRegister>({
		full_name: '',
		email: '',
		password: '',
		repeactpass: '',
	});
	const router = useRouter();
	// Đăng ký tài khoản
	const { mutate } = useMutation({
		mutationFn: (data: { full_name: string; email: string; password: string }) => register(data),
		onSuccess: () => {
			setTimeout(() => {
				toast.success('Đã đăng ký thành công!', {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				router.push('/login');
			}, 100);
		},
		onError: () => {
			setTimeout(() => {
				toast.error(`Đăng ký thất bại`, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			}, 100);
		},
	});
	// Handle input change
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataForm((prevState: DataRegister) => ({
			...prevState,
			[name]: value,
		}));
	};
	// Validate Form
	const validateForm = () => {
		let isValid = true;
		const formErrors: { erFullname: string; erEmail: string; erPassword: string; erRepeactPass: string } = {
			erFullname: '',
			erEmail: '',
			erPassword: '',
			erRepeactPass: '',
		};
		const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		// Validate fullname
		if (!dataForm.full_name || dataForm.full_name === '') {
			formErrors.erFullname = 'Vui lòng nhập họ và tên!';
			isValid = false;
		} else if (dataForm.full_name.length < 5) {
			formErrors.erFullname = 'Vui lòng nhập họ và tên hơn 5 kí tự!';
			isValid = false;
		} else if (specialCharsRegex.test(dataForm.full_name)) {
			formErrors.erFullname = 'Họ và tên không được chứa ký tự đặc biệt!';
			isValid = false;
		}
		// Validate Email
		if (!dataForm.email || dataForm.email === '') {
			formErrors.erEmail = 'Vui lòng nhập email!';
			isValid = false;
		} else if (!emailPattern.test(dataForm.email)) {
			formErrors.erEmail = 'Email không đúng định dạng!';
			isValid = false;
		}
		// Validate password
		if (!dataForm.password || dataForm.password === '') {
			formErrors.erPassword = 'Vui lòng nhập mật khẩu!';
			isValid = false;
		} else if (dataForm.password.length < 8) {
			formErrors.erPassword = 'Mật khẩu phải có ít nhất 8 kí tự!';
			isValid = false;
		}
		// Validate repeact password
		if (!dataForm.repeactpass || dataForm.repeactpass === '') {
			formErrors.erRepeactPass = 'Vui lòng nhập lại mật khẩu để xác nhận!';
			isValid = false;
		} else if (dataForm.repeactpass !== dataForm.password) {
			formErrors.erRepeactPass = 'Mật khẩu không trùng khớp!';
			isValid = false;
		}
		// Set error
		setErrors(formErrors);
		return isValid;
	};
	// Submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateForm()) {
			// Call api
			mutate(dataForm);
		} else {
			console.log('Đăng ký không thành công!');
		}
	};
	// Check login
	if (user.isLogin) return router.push('/');
	return (
		<div className='container mx-auto w-10/12 bg-white'>
			<ToastContainer />
			<div className='flex min-h-full flex-1 flex-col justify-center lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					{/* logo */}
					{/* <img
						className='mx-auto h-10 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
						alt='Your Company'
					/> */}
					<h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Đăng ký</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={handleSubmit}>
						{/* Full name */}
						<div className='mb-2'>
							<label
								htmlFor='fullname-lable'
								className='mb-2 block text-sm font-medium leading-6 text-gray-900'
							>
								Họ và tên
							</label>
							<div>
								<input
									id='fullname'
									name='full_name'
									value={dataForm.full_name}
									type='text'
									className={`${
										errors && errors.erFullname ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erFullname}</p>}
							</div>
						</div>
						{/* Email */}
						<div className='mb-2'>
							<label htmlFor='email' className='mb-2 block text-sm font-medium leading-6 text-gray-900'>
								Tài khoản Email
							</label>
							<div>
								<input
									id='email'
									name='email'
									value={dataForm.email}
									type='text'
									className={`${
										errors && errors.erEmail ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erEmail}</p>}
							</div>
						</div>
						{/* Password */}
						<div className='mb-2'>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='mb-2 block text-sm font-medium leading-6 text-gray-900'>
									Mật khẩu
								</label>
							</div>
							<div>
								<input
									id='password'
									type='password'
									name='password'
									value={dataForm.password}
									className={`${
										errors && errors.erPassword ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erPassword}</p>}
							</div>
						</div>
						{/* Repeact Password */}
						<div className='mb-2'>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
									Xác nhận mật khẩu
								</label>
							</div>
							<div>
								<input
									id='repeactpass'
									type='password'
									name='repeactpass'
									value={dataForm.repeactpass}
									className={`${
										errors && errors.erRepeactPass ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erRepeactPass}</p>}
							</div>
						</div>
						<div className='mt-4'>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
							>
								Đăng ký
							</button>
						</div>
					</form>
					<p className='mt-10 text-center text-sm text-gray-500'>
						Bạn đã có tài khoản?{' '}
						<Link href='/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Đăng nhập ngay
						</Link>
					</p>
					<hr />
					<p className='mt-3 text-center text-sm text-gray-500'>Hoặc đăng ký bằng</p>
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
