'use client';
import Sidebar from '@/admin/components/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex'>
			<div className='flex flex-col lg:flex-row'>
				<Sidebar />
			</div>
			<div className='flex flex-grow flex-col'>{children}</div>
		</div>
	);
}
