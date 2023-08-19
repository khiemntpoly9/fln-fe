'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '@/contexts/context';
import Sidebar from '@/admin/components/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { user } = useContext(Context);
	if (!user.isLogin || user.role !== 'admin') {
		return router.push('/');
	}
	return (
		<div className='flex'>
			<div className='flex flex-col lg:flex-row'>
				<Sidebar />
			</div>
			<div className='flex flex-grow flex-col'>{children}</div>
		</div>
	);
}
