/* eslint-disable @next/next/no-img-element */
'use client';

import SlideNoiBat from './components/SlideNoiBat';

import LichSuDoc from './components/LichSuDoc';
import TruyenMoi from './components/TruyenMoi';
import ChuongMoi from './components/ChuongMoi';

export default function Home() {
	return (
		<main className='bg-white'>
			<div className='slide'>
				<SlideNoiBat />
			</div>

			<div className='mx-auto mt-2 w-10/12 '>
				<LichSuDoc />

				<TruyenMoi />

				<ChuongMoi />
			</div>
		</main>
	);
}
