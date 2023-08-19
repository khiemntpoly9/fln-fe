'use client';
import Providers from '@/providers';
import { useState, useEffect } from 'react';
import { Context } from '@/contexts/context';
import { checkLogin } from '@/services/auth.service';
import './globals.css';
// import type { Metadata } from 'next';
// export const metadata: Metadata = {
// 	title: 'Trang chủ',
// 	description: 'FLN',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// Status login
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [role, setRole] = useState<string>('');
	useEffect(() => {
		const checkLoginStatus = async () => {
			const statusLogin = await checkLogin();
			setIsLogin(statusLogin.data.isLogin);
			setRole(statusLogin.data.role);
		};
		checkLoginStatus();
	}, [isLogin]);
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Context.Provider value={{ user: { isLogin, setIsLogin, role } }}>
					<Providers>{children}</Providers>
				</Context.Provider>
			</body>
		</html>
	);
}
