'use client';
import Sidebar from './components/Sidebar';
export default function AdminMain() {
	return (
		<div>
			<div className='flex flex-col lg:flex-row'>
				<Sidebar />
			</div>
			<h3>Trang quản trị</h3>
		</div>
	);
}
