import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/app/providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Trang chủ',
	description: 'FLN',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body suppressHydrationWarning={true}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</Providers>
	);
}
