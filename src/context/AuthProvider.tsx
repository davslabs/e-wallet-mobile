import { setItemAsync } from 'expo-secure-store';
import { createContext, useCallback, useMemo, useState } from 'react';
import axios from '../api/axios';
import useVerifyToken from '../hooks/useVerifyToken';

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
    nombre: string,
    email: string,
    fechaNacimiento: Date,
    password: string,
    confirmarPassword: string,
  ) => Promise<void>;
  refreshToken: () => Promise<void>;
  auth: any;
  isLoading: boolean;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const verify = useVerifyToken();

  const cleanState = useCallback(async () => {
    await setItemAsync('accessToken', '');
    await setItemAsync('refreshToken', '');
    setAuth({ isLoggedIn: false });
  }, [setAuth]);

  const authContext = useMemo(
    () => ({
      signIn: async (email: string, password: string) => {
        try {
          if (!email || !password) throw new Error('Email y contraseña son requeridos');

          const {
            data: { accessToken },
          } = await axios.post(
            '/auth/login',
            { email, password },
            { headers: { 'Content-Type': 'application/json' }, withCredentials: true },
          );

          await setItemAsync('accessToken', accessToken);
          await setItemAsync('email', email);

          setAuth({ accessToken, email, isLoggedIn: true });
          setIsLoading(false);
        } catch (error: any) {
          if (error?.response) {
            console.error(`Error al iniciar sesión: ${error?.response?.data?.error.message}`);
          } else {
            console.error(error.message);
          }
        }
      },
      signOut: async () => {
        await cleanState();
      },
      refreshToken: async () => {
        const accessToken = await verify();
        if (accessToken) {
          await setItemAsync('accessToken', accessToken);
          setAuth({ accessToken, isLoggedIn: true });
        } else {
          await cleanState();
        }
        setIsLoading(false);
      },
      signUp: async (
        nombre: string,
        email: string,
        fechaNacimiento: Date,
        password: string,
        confirmarPassword: string,
      ) => {
        try {
          if (!nombre) throw new Error('Se requiere ingresar un nombre');
          if (!email || !password) throw new Error('Email y contraseña son requeridos');
          if (password !== confirmarPassword) throw new Error('Las contraseñas son distintas');

          await axios.post(
            '/auth/registrar',
            { nombre, email, fechaNacimiento, password },
            { headers: { 'Content-Type': 'application/json' }, withCredentials: true },
          );
        } catch (error: any) {
          if (error?.response) {
            console.error(`Error al registrar: ${error?.response?.data?.error.message}`);
          } else {
            console.error(error.message);
          }
        }
      },
    }),
    [verify, cleanState],
  );

  return (
    <AuthContext.Provider value={{ auth: { isLoggedIn: true }, ...authContext, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
