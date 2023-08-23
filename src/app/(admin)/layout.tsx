'use client';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Sidebar from '@/admin/components/Sidebar';
import { checkLogin } from '@/services/auth.service';
import Loading from '@/components/Loading';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { data, isLoading } = useQuery({
		queryKey: ['checkLogin'],
		queryFn: checkLogin,
		retry: false,
	});
	if (!data && isLoading) {
		return <Loading />;
	}
	if (data?.data.role !== 'admin') return router.push('/login');
	return (
		<div className='min-h-screen md:flex'>
			<Sidebar />
			<div className='flex flex-grow flex-col'>{children}</div>
		</div>
	);
}
