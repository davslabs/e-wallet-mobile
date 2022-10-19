import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';

const useAxiosPrivate = () => {
  const { auth, signOut } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization'])
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          await signOut();
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
