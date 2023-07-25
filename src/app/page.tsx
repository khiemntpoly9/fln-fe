/* eslint-disable @next/next/no-img-element */
'use client';

import SlideNoiBat from './components/SlideNoiBat';

import LichSuDoc from './components/LichSuDoc';
import TruyenMoi from './components/TruyenMoi';
import ChuongMoi from './components/ChuongMoi';

export default function Home() {
	return (
		<main className='mx-auto bg-white'>
			<div className='slide'>
				<SlideNoiBat />
			</div>

			<div className='mt-2 w-full'>
				<div className='flex flex-col justify-center gap-2 lg:flex-row'>
					<div className='order-2 mx-auto w-10/12 lg:order-1 lg:m-0 lg:w-6/12'>
						<TruyenMoi />
					</div>
					<div className='order-1 mx-auto w-10/12	lg:order-2 lg:m-0 lg:w-4/12'>
						<LichSuDoc />
					</div>
				</div>

				<div className='flex flex-col justify-center gap-2 lg:flex-row'>
					<div className='order-2 mx-auto w-10/12 lg:order-1 lg:m-0 lg:w-6/12'>
						<ChuongMoi />
					</div>
				</div>
			</div>
		</main>
	);
}
