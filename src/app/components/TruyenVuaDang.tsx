/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TruyenVuaDang = () => {
	return (
		<div className='new-upload relative w-full py-6'>
			<div className='top relative h-7 w-96'>
				<h1 className='font-bold uppercase text-black underline'>Truyện vừa đăng</h1>
			</div>
			<div className='bottom relative'>
				<div className='card grid grid-cols-3 gap-2 rounded-md py-1'>
					<img
						src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
						alt='thumb'
						className='px-2 lg:h-fit'
					/>
					<div className='name grid-span-2'>
						<h2 className='text-xs sm:text-base lg:text-xl'>name</h2>
						<span>tóm tắt dưmadkwamdkadwdnakwn</span>
					</div>
				</div>
				<div className='rowcard grid grid-cols-3 gap-2 rounded-md py-1'>
					<img
						src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
						alt='thumb'
						className=' px-2 lg:h-fit'
					/>
					<div className='name grid-span-2'>
						<h2 className='text-xs sm:text-base lg:text-xl'>name</h2>
						<span>tóm tắt dưmadkwamdkadwdnakwn</span>
					</div>
				</div>

				<button className='item-center btn btn-outline btn-xs w-full bg-orange-300 sm:btn-sm md:btn-md lg:btn-md hover:bg-orange-400'>
					<span className='text-neutral-800'>Xem thêm</span>
				</button>
			</div>
		</div>
	);
};

export default TruyenVuaDang;
