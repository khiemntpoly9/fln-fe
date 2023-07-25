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
			<div className='space-y-5'>
				<h1 className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 '>Hello world!</h1>
			</div>
			{/*start silde */}
			<div className='flex-row  '>
				<div className='nav mx-auto  mt-3 flex  w-10/12 space-x-4 md:w-10/12 md:items-center'>
					<div
						className={`n-i-b-t  cursor-pointer rounded px-2 py-2 text-sm text-black transition   md:text-base ${activeTab === 'Nổi bật' ? 'bg-gray-400' : ''
							}`}
						onClick={() => handleTabClick('Nổi bật')}
					>
						Nổi bật
					</div>
					<div
						className={`top-l-t-xem  cursor-pointer rounded px-2 py-2 text-sm text-black transition  md:text-base ${activeTab === 'Top lượt xem' ? 'bg-gray-400' : ''
							}`}
						onClick={() => handleTabClick('Top lượt xem')}
					>
						Top lượt xem
					</div>
					<div
						className={`top-l-t-xem-th-ng  cursor-pointer rounded px-2 py-2 text-sm text-black transition  md:text-base ${activeTab === 'Top lượt xem tháng' ? 'bg-gray-400' : ''
							}`}
						onClick={() => handleTabClick('Top lượt xem tháng')}
					>
						Top lượt xem tháng
					</div>
				</div>
				<div className='mt-2 mx-auto w-10/12 '>
					<Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
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
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='relative w-171 h-185 flex flex-col items-center'>
								<img className='w-173 h-49' src="https://cdn.popsww.com/blog/sites/2/2022/03/Anh-mat-si-tinh-cua-nam-chinh-trong-Lai-duoc-gap-em-715x1080.jpg" alt="" />
								<div className="absolute bottom-0 left-0 right-0  h-49 bg-gradient-to-b from-transparent via-gray-600 to-black">
									<div className="text-center text-white text-lg font-bold break-words">
										Konosuba
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			{/*end silde */}
		</main>
	);
}
