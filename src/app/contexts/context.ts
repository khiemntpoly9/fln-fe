import { createContext } from 'react';

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
