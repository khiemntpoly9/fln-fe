import { createContext, useState } from 'react';

// Khai báo kiểu dữ liệu cho AuthContext
const AuthContext = createContext({ auth: { user: {} }, setAuth: (auth: any) => {} });

// Khai báo AuthProvider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	// Khai báo state auth và setAuth
	const [auth, setAuth] = useState({ user: {} });

	// Trả về AuthContext.Provider với giá trị là auth và setAuth
	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
