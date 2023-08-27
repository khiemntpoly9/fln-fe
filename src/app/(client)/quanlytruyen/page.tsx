/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Quanly = () => {
	return (
		<div className='mx-auto my-10 w-10/12 lg:w-8/12 '>
			<div className='rounded-lg border border-black'>
				<div className=' rounded-t-lg border border-black bg-zinc-300 p-3 md:p-5'>
					<div className='  text-base font-bold text-black	'>Truyện của tôi:</div>
				</div>
				<div className='rounded-b-lg border border-black p-3 md:p-5'>
					<div className='py-2 text-base text-black'>
						Truyện đã đăng : <span>2</span>
					</div>
					<div className='py-2 text-base text-black'>
						Số vol : <span>30</span>
					</div>
					<div className='py-2 text-base text-black'>
						Số chương : <span>252</span>
					</div>
				</div>
			</div>
			<div className='my-5 rounded-lg border border-black'>
				<div className=' group rounded-t-lg  border border-black bg-zinc-300  p-3 hover:bg-slate-600 md:p-4'>
					<a href='#' className=' text-base text-black  group-hover:text-white'>
						Thêm truyện mới
					</a>
				</div>
				<div className='group border border-black bg-zinc-300 p-3 hover:bg-slate-600 md:p-4 '>
					<a href='#' className=' text-base text-black  group-hover:text-white'>
						Danh sách truyện đã đăng
					</a>
				</div>
				<div className='group rounded-b-lg border border-black  bg-zinc-300 p-3 hover:bg-slate-600  md:p-4'>
					<a href='#' className=' text-base text-black  group-hover:text-white'>
						Nhóm dịch
					</a>
				</div>
			</div>
		</div>
	);
};

export default Quanly;
