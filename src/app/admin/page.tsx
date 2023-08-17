'use client';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
export default function AdminMain() {
	return (
		<div className='flex'>
			<div className='flex flex-col lg:flex-row'>
				<Sidebar />
			</div>

			<div className='flex flex-grow flex-col'>
				<Dashboard />
			</div>
		</div>
	);
}
