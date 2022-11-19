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
  ) => Promise<boolean>;
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
            data: { accessToken, nombre },
          } = await axios.post(
            '/auth/login',
            { email, password },
            { headers: { 'Content-Type': 'application/json' }, withCredentials: true },
          );

          await setItemAsync('accessToken', accessToken);
          await setItemAsync('email', email);
          await setItemAsync('nombre', nombre);

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
        const data = await verify();
        if (data?.accessToken) {
          await setItemAsync('accessToken', data.accessToken);
          setAuth({ accessToken: data.accessToken, email: data.email, nombre: data.nombre, isLoggedIn: true });
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
        const PASSWORD_MIN_LENGTH = 8;
        try {
          if (!nombre) throw new Error('Se requiere ingresar un nombre');
          if (!email || !password) throw new Error('Email y contraseña son requeridos');
          if (password.length < PASSWORD_MIN_LENGTH) throw new Error('La contraseña es demasiado corta.');
          if (password !== confirmarPassword) throw new Error('Las contraseñas son distintas');
          await axios.post(
            '/auth/registrar',
            { nombre, email, fechaNacimiento, password },
            { headers: { 'Content-Type': 'application/json' }, withCredentials: true },
          );
          return true;
        } catch (error: any) {
          if (error?.response) {
            console.error(`Error al registrar: ${error?.response?.data?.error.message}`);
          } else {
            console.error(error.message);
          }
          return false;
        }
      },
    }),
    [verify, cleanState],
  );

  return <AuthContext.Provider value={{ auth, ...authContext, isLoading }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
