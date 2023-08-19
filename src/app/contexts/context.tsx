'use client';
import { checkLogin } from '@/services/auth.service';
import { createContext, useState, useEffect } from 'react';

type ContextType = {
	user: {
		isLogin: boolean;
		setIsLogin: (value: boolean) => void;
		role: string;
	};
};

export const Context = createContext<ContextType>({
	user: {
		isLogin: false,
		setIsLogin: () => {},
		role: '',
	},
});

export default function ContextProvider({ children }: { children: React.ReactNode }) {
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
	return <Context.Provider value={{ user: { isLogin, setIsLogin, role } }}>{children}</Context.Provider>;
}
