/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function Home() {
	const [activeTab, setActiveTab] = useState('Nổi bật');
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};
	return (
		<main>
			{/*start silde */}
			<div className='flex-row  '>
				<div className='nav mx-auto  mt-3 flex  w-10/12 space-x-4 md:w-10/12 md:items-center'>
					<div
						className={`n-i-b-t  cursor-pointer rounded px-2 py-2 text-sm text-black transition   md:text-base ${
							activeTab === 'Nổi bật' ? 'bg-gray-400' : ''
						}`}
						onClick={() => handleTabClick('Nổi bật')}
					>
						Nổi bật
					</div>
					<div
						className={`top-l-t-xem  cursor-pointer rounded px-2 py-2 text-sm text-black transition  md:text-base ${
							activeTab === 'Top lượt xem' ? 'bg-gray-400' : ''
						}`}
						onClick={() => handleTabClick('Top lượt xem')}
					>
						Top lượt xem
					</div>
					<div
						className={`top-l-t-xem-th-ng  cursor-pointer rounded px-2 py-2 text-sm text-black transition  md:text-base ${
							activeTab === 'Top lượt xem tháng' ? 'bg-gray-400' : ''
						}`}
						onClick={() => handleTabClick('Top lượt xem tháng')}
					>
						Top lượt xem tháng
					</div>
				</div>
				<div className='mx-auto mt-2 w-10/12 '>
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={30}
						slidesPerView={2}
						speed={800}
						pagination={{ clickable: true }}
						onSlideChange={() => ''}
						navigation
						breakpoints={{
							780: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 5,
							},
						}}
					>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-171 h-185 relative flex flex-col items-center'>
								<img
									className='w-173 h-49'
									src='https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg'
									alt=''
								/>
								<div className='h-49 absolute bottom-0 left-0  right-0 bg-gradient-to-b from-transparent via-gray-600 to-black'>
									<div className='break-words text-center text-lg font-bold text-white'>Konosuba</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			{/*end silde */}

			<div>
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
								className=' px-2'
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
					<div className=''>
						<div className='bottom relative flex grid-cols-3 gap-2 py-2 sm:grid-cols-4'>
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
				</div>
				{/* end Truyện mới */}

				{/* Start Chương mới */}
				<div className='new_LN relative py-6'>
					<div className='top relative h-7 w-96'>
						<div className='absolute left-0 top-0 h-7 w-16 bg-zinc-300' />
						<div className='absolute left-4 top-2 text-xs font-normal text-black'>Chương</div>
						<div className='absolute left-20 top-2 text-xs font-bold uppercase text-black underline'>mới</div>
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
		</main>
	);
}
