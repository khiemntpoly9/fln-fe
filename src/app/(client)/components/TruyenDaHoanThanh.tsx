/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const TruyenDaHoanThanh = () => {
    return (
        <div className='lg:w-356 lg:h-374 flex h-auto w-full flex-col items-center py-6 lg:items-start'>
            <div className='lg:w-356 h-30 relative flex w-full flex-row items-start justify-start'>
                <div className='h-30 w-20 bg-gray-300'>
                    <div className='break-words py-2 text-center text-sm font-normal text-black  md:text-base'>
                        Truyện
                    </div>
                </div>
                <div className='break-words px-2 py-2 text-sm font-bold uppercase text-black underline  md:text-base'>
                    Đã Hoàn thành
                </div>
            </div>

            <div className='lg:w-355 mt-2 h-auto w-full'>
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
    );
};

export default TruyenDaHoanThanh;
