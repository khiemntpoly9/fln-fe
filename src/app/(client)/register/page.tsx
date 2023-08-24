/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { checkLogin, register } from '@/services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DataRegister = {
	full_name: string;
	email: string;
	password: string;
	repeactpass: string;
};

export default function Register() {
	const [isShowError, setIsShowError] = useState<boolean>(false);
	const [isMessageErrorName, setIsMessageErrorName] = useState<string>('');
	const [isMessageErrorEmail, setIsMessageErrorEmail] = useState<string>('');
	const [isMessageErrorPass, setIsMessageErrorPass] = useState<string>('');
	const [isMessageErrorRepeactPass, setIsMessageErrorRepeactPass] = useState<string>('');

	const [dataForm, setDataForm] = useState<DataRegister>({
		full_name: '',
		email: '',
		password: '',
		repeactpass: '',
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataForm((prevState: DataRegister) => ({
			...prevState,
			[name]: value,
		}));
	};

	// validate
	// const validateForm2 = () => {
	// 	//settime da dang ky thanh cong
	// 	setTimeout(() => {
	// 		toast.success('Đã đăng ký thành công!', {
	// 			position: 'top-right',
	// 			autoClose: 3000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 		});
	// 	}, 1000);
	// 	return true;
	// };
	// Validate Form
	const validateForm = (data: DataRegister) => {
		// Check fullname
		const checkFullName = (fullname: string) => {
			const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
			if (fullname === '') {
				setIsMessageErrorName('Vui lòng nhập họ và tên!');
			} else if (fullname.length < 5) {
				setIsMessageErrorName('Vui lòng nhập họ và tên hơn 5 kí tự!');
			} else if (specialCharsRegex.test(fullname)) {
				setIsMessageErrorName('Họ và tên không được chứa ký tự đặc biệt!');
			} else {
				setIsMessageErrorName('');
			}
		};
		// Check email
		const checkEmail = (email: string) => {
			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (email === '') {
				setIsMessageErrorEmail('Vui lòng nhập email!');
			} else if (!emailPattern.test(email)) {
				setIsMessageErrorEmail('Email không đúng định dạng!');
			} else {
				setIsMessageErrorEmail('');
			}
		};
		// Check password
		const checkPassword = (password: string) => {
			if (password.trim() === '') {
				setIsMessageErrorPass('Vui lòng nhập mật khẩu!');
			} else if (password.length < 8) {
				setIsMessageErrorPass('Mật khẩu phải có ít nhất 8 kí tự!');
			} else {
				setIsMessageErrorPass('');
			}
		};
		// Check repeact password
		const checkRepeactPass = (password: string, repeactpass: string) => {
			if (repeactpass.trim() === '') {
				setIsMessageErrorRepeactPass('Vui lòng nhập lại mật khẩu để xác nhận!');
			} else if (password !== repeactpass) {
				setIsMessageErrorRepeactPass('Mật khẩu không trùng khớp!');
			} else {
				setIsMessageErrorRepeactPass('');
			}
		};
		// Call check
		checkFullName(data.full_name);
		checkEmail(data.email);
		checkPassword(data.password);
		checkRepeactPass(data.password, data.repeactpass);
	};
	// Submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		validateForm(dataForm);
		if (!isMessageErrorName && !isMessageErrorEmail && !isMessageErrorPass && !isMessageErrorRepeactPass) {
			// Call api
			console.log('Đăng nhập thành công!');
		} else {
			setIsShowError(true);
			return false;
		}
	};

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
										isMessageErrorName && isShowError ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{isShowError && <p className='text-sm italic text-red-500'>{isMessageErrorName}</p>}
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
										isMessageErrorEmail && isShowError ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{isShowError && <p className='text-sm italic text-red-500'>{isMessageErrorEmail}</p>}
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
										isMessageErrorPass && isShowError ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{isShowError && <p className='text-sm italic text-red-500'>{isMessageErrorPass}</p>}
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
										isMessageErrorRepeactPass && isShowError ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									onChange={handleInputChange}
								/>
								{isShowError && <p className='text-sm italic text-red-500'>{isMessageErrorRepeactPass}</p>}
							</div>
						</div>
						{/* <div>
							{isRegistered && (
								<div className='rounded-md border border-green-400 bg-green-100 px-4 py-3 text-green-700'>
									Đã đăng ký thành công!
								</div>
							)}
						</div> */}
						<div className='mt-4'>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
							>
								Đăng ký
							</button>
						</div>
					</form>
					<ToastContainer />
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
