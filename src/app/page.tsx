'use client';

export default function Home() {
	return (
		<div>
			<h1 className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 '>Hello world!</h1>

			{/*start Lich su doc */}
			<div className='history-read relative py-6 '>
				<div className='top relative h-7 w-96'>
					<div className='absolute left-0 top-0 h-7 w-16 bg-zinc-300' />
					<div className='absolute left-4 top-2 text-xs font-normal text-black'>Truyện</div>
					<div className='absolute left-20 top-2 text-xs font-bold uppercase text-black underline'>
						vừa đọc
					</div>
				</div>
				<div className='bottom relative'>
					<div className='card grid grid-cols-3 gap-2 py-1'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt='thumb'
							className='px-2 '
						/>
						<div className='name grid-span-2'>
							<h2>name</h2>
							<span>tóm tắt dưmadkwamdkadwdnakwn</span>
						</div>
					</div>
					<div className='rowcard grid grid-cols-3 gap-2 py-1'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt='thumb'
							className='px-2 '
						/>
						<div className='name grid-span-2'>
							<h2>name</h2>
							<span>tóm tắt dưmadkwamdkadwdnakwn</span>
						</div>
					</div>
				</div>
			</div>
			{/*end lich su doc */}

			{/* start Truyện mới */}
			<div className='new_LN relative py-6'>
				<div className='top relative h-7 w-96'>
					<div className='absolute left-0 top-0 h-7 w-16 bg-zinc-300' />
					<div className='absolute left-4 top-2 text-xs font-normal text-black'>Truyện</div>
					<div className='absolute left-20 top-2 text-xs font-bold uppercase text-black underline'>mới</div>
				</div>

				{/* chưa chia row */}
				<div className='bottom relative flex grid-cols-3 gap-2 py-2'>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
				</div>
				<div className='bottom relative flex grid-cols-3 gap-2 py-2'>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
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
			{/* end Truyện mới */}

			{/* Start Chương mới */}
			<div className='new_LN relative py-6'>
				<div className='top relative h-7 w-96'>
					<div className='absolute left-0 top-0 h-7 w-16 bg-zinc-300' />
					<div className='absolute left-4 top-2 text-xs font-normal text-black'>Chương</div>
					<div className='absolute left-20 top-2 text-xs font-bold uppercase text-black underline'>mới</div>
				</div>

				{/* chưa chia row */}
				<div className='bottom relative flex grid-cols-3 gap-2 py-2'>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
				</div>
				<div className='bottom relative flex grid-cols-3 gap-2 py-2'>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
				</div>
				<div className='bottom relative flex grid-cols-3 gap-2 py-2'>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card px-2'>
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
						/>
						<div className='name'>
							<h2>konosuba</h2>
						</div>
					</div>
					<div className='card relative px-2 	'>
						<div className='absolute right-4 top-2 h-40 w-24 border-4 border-indigo-500/100'></div>
						<div className='absolute right-2 h-full w-28  bg-zinc-300 opacity-70' />
						<img
							src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
							alt=''
							className=''
						/>
						<div className='name color absolute left-5 top-20'>
							<h2>Xem thêm</h2>
						</div>
					</div>
				</div>
			</div>
			{/* end Chương mới */}
		</div>
	);
}
