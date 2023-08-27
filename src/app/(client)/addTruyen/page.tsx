'use client';
import React, { useState } from 'react';

type ErrorsType = {
	eremail?: string;
	erpassword?: string;
};

type DataLogin = {
	email: string;
	password: string;
};

const AddTruyen = () => {
	const [dataForm, setDataForm] = useState<DataLogin>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<ErrorsType>({});

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
	return (
		<div>
			<div className='container mx-auto w-10/12 bg-white'>
				<div className='flex min-h-full flex-1 flex-col justify-center lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
						<h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Thêm truyện
						</h2>
					</div>
					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
						<form>
							{/* Tên truyện */}
							<div className='mb-2'>
								<label htmlFor='name' className='mb-2 block text-sm font-medium leading-6 text-gray-900'>
									Tên truyện
								</label>
								<div>
									<input
										id='name'
										name='name'
										type='text'
										value={dataForm.email}
										onChange={handleInputChange}
										className={`${
											errors && errors.eremail ? 'mb-2 border-rose-600' : ''
										} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									/>
									{errors && <p className='text-sm italic text-red-500'>{errors.eremail}</p>}
								</div>
							</div>
							{/* Tên khác */}
							<div className='mb-2'>
								<div className='mb-2 flex items-center justify-between'>
									<label htmlFor='aname' className='block text-sm font-medium leading-6 text-gray-900'>
										Tên khác
									</label>
								</div>
								<div className='mt-2'>
									<input
										id='aname'
										name='aname'
										type='text'
										value={dataForm.password}
										onChange={handleInputChange}
										className={`${
											errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
										} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									/>
									{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
								</div>

								{/* Tác giả */}
								<div className='mb-2 flex items-center justify-between'>
									<label htmlFor='author' className='block text-sm font-medium leading-6 text-gray-900'>
										Tác giả
									</label>
								</div>
								<div className='mt-2'>
									<input
										id='author'
										name='author'
										type='text'
										value={dataForm.password}
										onChange={handleInputChange}
										className={`${
											errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
										} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									/>
									{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
								</div>

								{/* Họa sĩ */}
								<div className='mb-2 flex items-center justify-between'>
									<label htmlFor='illustrator' className='block text-sm font-medium leading-6 text-gray-900'>
										Họa sĩ
									</label>
								</div>
								<div className='mt-2'>
									<input
										id='illustrator'
										name='illustrator'
										type='text'
										value={dataForm.password}
										onChange={handleInputChange}
										className={`${
											errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
										} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									/>
									{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
								</div>

								{/* Nhóm dịch */}
								<div className='mb-2 flex items-center justify-between'>
									<label htmlFor='team' className='block text-sm font-medium leading-6 text-gray-900'>
										Nhóm dịch
									</label>
								</div>
								<div className='mt-2'>
									<select
										name='team'
										id='team'
										value={dataForm.password}
										// onSelect={handleInputChange}
										className={`${
											errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
										} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
									>
										alo
									</select>
									{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
								</div>
							</div>

							{/* Thể loại */}
							<div className='mb-2 flex items-center justify-between'>
								<label htmlFor='illustrator' className='block text-sm font-medium leading-6 text-gray-900'>
									Thể loại
								</label>
							</div>
							<div className='flex flex-wrap items-center'>
								<div className='mb-2 w-1/2 md:mb-0 md:flex md:w-1/3'>
									<input type='checkbox' name='adventure' id='adventure' />
									<label htmlFor='adventure' className='block text-sm font-medium leading-6 text-gray-900'>
										Adventure
									</label>
								</div>

								<div className='mb-2 w-1/2 md:mb-0 md:flex md:w-1/3'>
									<input type='checkbox' name='anotherOption' id='anotherOption' />
									<label
										htmlFor='anotherOption'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Another Option
									</label>
								</div>

								<div className='mb-2 w-1/2 md:mb-0 md:flex md:w-1/3'>
									<input type='checkbox' name='checkbox3' id='checkbox3' />
									<label htmlFor='checkbox3' className='block text-sm font-medium leading-6 text-gray-900'>
										Checkbox 3
									</label>
								</div>

								<div className='mb-2 w-1/2 md:mb-0 md:flex md:w-1/3'>
									<input type='checkbox' name='checkbox4' id='checkbox4' />
									<label htmlFor='checkbox4' className='block text-sm font-medium leading-6 text-gray-900'>
										Checkbox 4
									</label>
								</div>

								<div className='mb-2 w-1/2 md:mb-0 md:flex md:w-1/3'>
									<input type='checkbox' name='checkbox5' id='checkbox5' />
									<label htmlFor='checkbox5' className='block text-sm font-medium leading-6 text-gray-900'>
										Checkbox 5
									</label>
								</div>

								{/* Thêm các checkbox và label khác tương tự ở đây */}
							</div>
							{/* Tóm tắt */}
							<div className='mb-2 flex items-center justify-between'>
								<label htmlFor='detail' className='block text-sm font-medium leading-6 text-gray-900'>
									Tóm tắt
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='detail'
									name='detail'
									type='textarea'
									value={dataForm.password}
									onChange={handleInputChange}
									className={`${
										errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
							</div>

							{/* Chú thích */}
							<div className='mb-2 flex items-center justify-between'>
								<label htmlFor='note' className='block text-sm font-medium leading-6 text-gray-900'>
									Chú thích
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='note'
									name='note'
									type='textarea'
									value={dataForm.password}
									onChange={handleInputChange}
									className={`${
										errors && errors.erpassword ? 'mb-2 border-rose-600' : ''
									} w-full appearance-none rounded border p-2 shadow focus:outline-none`}
								/>
								{errors && <p className='text-sm italic text-red-500'>{errors.erpassword}</p>}
							</div>
							<div className='mt-4'>
								<button
									type='submit'
									className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
								>
									Thêm
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTruyen;
