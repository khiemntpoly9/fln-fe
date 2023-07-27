/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
export default function Truyen() {
	return (
		<div className='container mx-auto w-10/12'>
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
									d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
								/>
							</svg>
							Truyện dịch
						</a>
					</li>
				</ul>
			</div>
			{/* End Breadcrumbs */}
			{/* Info truyện */}
			<div className='container mx-auto mb-4 grid w-full rounded border-2 p-3'>
				{/* Container 1 */}
				<div className='grid grid-cols-4 gap-3 border-b-2 pb-3'>
					<div className='col-span-4 sm:col-span-1'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt='thumb'
							className='rounded'
						/>
					</div>
					<div className='col-span-4 sm:col-span-3'>
						{/* name */}
						<span className='text-2xl font-semibold'>Kono Subarashii Sekai Ni Shukufuku o!</span>
						{/* category */}
						<div className='mt-2 flex gap-2'>
							<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
								Action
							</a>
							<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
								Action
							</a>
							<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
								Action
							</a>
							<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
								Action
							</a>
						</div>
						{/* author */}
						<div className='mt-2'>
							<p className='font-semibold'>
								Tác giả: {''}
								<a className='font-medium' href='#'>
									Akatsuki Natsume
								</a>
							</p>
						</div>
						{/* status */}
						<div className='mt-2'>
							<p className='font-semibold'>
								Tình trạng: {''}
								<span className='font-medium'>Đang tiến hành</span>
							</p>
						</div>
						{/* button */}
						<div className='mt-2 grid grid-cols-4 lg:w-1/2'>
							<button className='flex flex-col rounded-md p-2 text-center hover:bg-slate-300'>
								<div className='flex justify-center'>
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
											d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
										/>
									</svg>
								</div>
								<span>Theo dõi</span>
							</button>
							<button className='flex flex-col rounded-md p-2 text-center hover:bg-slate-300'>
								<div className='flex justify-center'>
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
											d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
										/>
									</svg>
								</div>
								<span>Đánh giá</span>
							</button>
							<button className='flex flex-col rounded-md p-2 text-center hover:bg-slate-300'>
								<div className='flex justify-center'>
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
											d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
										/>
									</svg>
								</div>
								<span>Bình luận</span>
							</button>
							<button className='flex flex-col rounded-md p-2 text-center hover:bg-slate-300'>
								<div className='flex justify-center'>
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
											d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
										/>
									</svg>
								</div>
								<span>Chia sẻ</span>
							</button>
						</div>
						{/* read */}
						<div className='mt-2 flex flex-row justify-center gap-2 md:justify-start'>
							<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>
								Đọc chương đầu
							</button>
							<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>
								Chương mới nhất
							</button>
						</div>
					</div>
				</div>
				{/* Container 2 -  */}
				<div className='grid grid-cols-3 border-b-2 py-3'>
					<div className='text-center'>
						Cập nhật mới <br /> 1 ngày
					</div>
					<div className='text-center'>
						Đánh giá <br /> 4.6/5
					</div>
					<div className='text-center'>
						Lượt theo dõi <br /> 2589
					</div>
				</div>
				{/* Container 3 */}
				<div className='grid grid-cols-1 border-b-2 py-3'>
					<span>Tên khác: Konosuba</span>
				</div>
				<div className='grid grid-cols-1 py-3'>
					<span>Tóm tắt: Konosuba</span>
				</div>
			</div>
		</div>
	);
}
