import Providers from '@/providers';
import ContextProvider from '@/contexts/context';
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Trang chủ',
	description: 'FLN',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Providers>
					<ContextProvider>{children}</ContextProvider>
				</Providers>
			</body>
		</html>
	);
}
