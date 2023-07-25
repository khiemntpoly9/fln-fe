/* eslint-disable @next/next/no-img-element */

import React from 'react';

const LichSuDoc = () => {
	return (
		<div>
			{/*start Lich su doc */}
			<div className='history-read relative py-6 lg:col-span-3 lg:col-start-7'>
				<div className='top relative h-7 w-96'>
					{/* <div className='absolute left-0 top-0 h-7 w-16 bg-zinc-300 sm:w-20' />
					<div className='absolute left-4 top-2 text-xs font-normal text-black sm:text-base'>Truyện</div>
					<div className='absolute left-20 top-2 text-xs font-bold uppercase text-black underline'>
						vừa đọc
					</div> */}
					<h1 className='font-bold uppercase text-black underline'>Truyện vừa đọc</h1>
				</div>
				<div className='bottom relative'>
					<div className='card grid grid-cols-3 gap-2 rounded-md py-1'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt='thumb'
							className=' px-2'
						/>
						<div className='name grid-span-2'>
							<h2 className='text-xs sm:text-base'>name</h2>
							<span>tóm tắt dưmadkwamdkadwdnakwn</span>
						</div>
					</div>
					<div className='rowcard grid grid-cols-3 gap-2 py-1'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt='thumb'
							className='rounded-md px-2 '
						/>
						<div className='name grid-span-2'>
							<h2>name</h2>
							<span>tóm tắt dưmadkwamdkadwdnakwn</span>
						</div>
					</div>
				</div>
			</div>
			{/*end lich su doc */}
		</div>
	);
};

export default LichSuDoc;
