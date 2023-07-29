/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
const Search = () => {
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
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
							Tìm kiếm
						</a>
					</li>
				</ul>
			</div>
			{/* End Breadcrumbs */}
			{/* {seacrh} */}
			<div className='relative mt-2 flex'>
				<input
					type='text'
					placeholder='Tên Tác Phẩm...'
					className=' w-full flex-1 rounded-l-md border px-4  py-2 text-sm  outline-none  md:text-base'
				/>
				<button
					type='submit'
					className='flex-grow-0 rounded-r-md bg-green-500 px-4 py-2 text-sm font-bold text-white  hover:bg-green-600  md:text-base'
				>
					Tìm kiếm
				</button>
			</div>
			{/* {end search} */}
			<div className='mb-10 mt-3'>
				<div className='bottom grid grid-cols-3 gap-2 text-center font-bold sm:grid-cols-4 lg:grid-cols-6'>
					<div className='card '>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card '>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card '>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card '>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card '>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
