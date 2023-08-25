import Providers from '@/providers';
import ContextProvider from '@/contexts/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
					<ContextProvider>
						<ToastContainer />
						{children}
					</ContextProvider>
				</Providers>
			</body>
		</html>
	);
}
