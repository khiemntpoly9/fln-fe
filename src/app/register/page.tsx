/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { register } from '../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
	const [fullname, setFullname] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);
	const [emailFormatError, setEmailFormatError] = useState<boolean>(false);
	const [passwordLengthError, setPasswordLengthError] = useState<boolean>(false);
	const [fullnameRequiredError, setFullnameRequiredError] = useState<boolean>(false);
	const [fullnameSpecialCharsError, setFullnameSpecialCharsError] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	// const [isRegistered, setIsRegistered] = useState<boolean>(false);

	// fullname
	const handleFullnameChange = (value: string) => {
		setFullname(value);
		setFullnameRequiredError(false);
		setFullnameSpecialCharsError(false);
	};
	// password
	const handlePasswordChange = (value: string) => {
		setPassword(value);
		if (isSubmitted) {
			setPasswordMatchError(checkPassword !== value);
		}
	};
	// checkpassword
	const handleCheckPasswordChange = (value: string) => {
		setCheckPassword(value);
		if (isSubmitted) {
			setPasswordMatchError(password !== value);
		}
	};
	//dung dang email
	const emailIsValid = (email: string): boolean => {
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	};
	// validate
	const validateForm = () => {
		setIsSubmitted(true);

		//validate so sanh mk giong nhau
		if (password !== checkPassword) {
			setPasswordMatchError(true);
			return false;
		}
		//validate fullname rog
		if (fullname.trim() === '') {
			setFullnameRequiredError(true);
			return false;
		}
		//validate ky tu dac biet fullname
		const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
		if (specialCharsRegex.test(fullname)) {
			setFullnameSpecialCharsError(true);
			return false;
		}
		//validate email
		if (email.trim() === '') {
			setEmailFormatError(false);
		} else if (!emailIsValid(email)) {
			setEmailFormatError(true);
			return false;
		} else {
			setEmailFormatError(false);
		}
		//validate password
		if (password === '' || password.length < 8) {
			setPasswordLengthError(true);
			return false;
		}
		//settime da dang ky thanh cong
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
		}, 1000);
		return true;
	};
	//submit
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		//call api
		if (validateForm()) {
			const logRegister = await register(fullname, email, password);
			console.log(logRegister);
		}
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
						Đăng ký
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='fullname' className='block text-sm font-medium leading-6 text-gray-900'>
								Tên đăng nhập
							</label>
							<div className='mt-2'>
								<input
									id='fullname'
									name='fullname'
									type='text'
									autoComplete='fullname'
									value={fullname}
									onChange={(e) => handleFullnameChange(e.target.value)}
									className='block w-full rounded-md border-0 px-5 py-1.5 text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
								/>
							</div>
							<div>
								{isSubmitted && (fullname.trim() === '' || fullnameRequiredError) && (
									<p className='text-red-500'>Vui lòng nhập tên đăng nhập.</p>
								)}
								{isSubmitted && fullname.trim() !== '' && fullnameSpecialCharsError && (
									<p className='text-red-500'>Tên đăng nhập không được chứa ký tự đặc biệt.</p>
								)}
							</div>
						</div>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
								Nhập email
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className={`block w-full rounded-md border-0 px-5 py-1.5 text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 ${
										(isSubmitted && email.trim() !== '' && !emailIsValid(email)) ||
										(isSubmitted && email.trim() === '' && emailFormatError)
											? 'ring-red-600'
											: ''
									}`}
								/>
							</div>
							<div>
								{isSubmitted && (email.trim() === '' || emailFormatError) && (
									<p className='text-red-600'>
										{email.trim() === ''
											? 'Vui lòng nhập địa chỉ email'
											: 'Địa chỉ email không đúng định dạng'}
									</p>
								)}
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
									Mật khẩu
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									value={password}
									onChange={(e) => handlePasswordChange(e.target.value)}
									className='block w-full rounded-md border-0  px-5  py-1.5 text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
								/>
							</div>
							<div>
								{isSubmitted &&
									((password === '' && <p className='text-red-500'>Vui lòng nhập mật khẩu.</p>) ||
										(password.length < 8 && (
											<p className='text-red-500'>Mật khẩu phải có ít nhất 8 kí tự.</p>
										)))}
							</div>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
									Xác nhận mật khẩu
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='check-password'
									name='check-password'
									type='password'
									autoComplete='current-password'
									value={checkPassword}
									onChange={(e) => handleCheckPasswordChange(e.target.value)}
									className='block w-full rounded-md border-0 px-5  py-1.5  text-gray-200 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6'
									onBlur={() => {
										if (checkPassword.trim() === '' && password.trim() !== '') {
											setPasswordMatchError(true);
										}
									}}
								/>
							</div>
							<div>
								{isSubmitted && passwordMatchError && (
									<p className='text-red-500'>
										{checkPassword.trim() === ''
											? 'Vui lòng nhập lại mật khẩu để xác nhận.'
											: 'Mật khẩu xác nhận không khớp với mật khẩu đã nhập.'}
									</p>
								)}
							</div>
						</div>
						<div>
							{/* {isRegistered && (
								<div className='rounded-md border border-green-400 bg-green-100 px-4 py-3 text-green-700'>
									Đã đăng ký thành công!
								</div>
							)} */}
						</div>
						<div>
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
						<a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Đăng nhập ngay
						</a>
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
