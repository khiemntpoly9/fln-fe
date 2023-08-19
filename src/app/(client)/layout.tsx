'use client';

import Footer from '@/client/components/Footer';
import Header from '@/client/components/Header';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
