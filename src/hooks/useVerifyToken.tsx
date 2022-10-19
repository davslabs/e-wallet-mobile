import { getItemAsync } from 'expo-secure-store';
import axios from '../api/axios';

const useVerifyToken = () => {
  const verify = async () => {
    const restoredToken = await getItemAsync('accessToken');
    if (!restoredToken) return null;
    try {
      const { data } = await axios.post(
        '/auth/verificar',
        {},
        { headers: { Authorization: `Bearer ${restoredToken}` } }
      );
      return data.accessToken;
    } catch (error: any) {
      if (error?.response?.status === 401) console.error('Usuario no autorizado');
      else if (error?.response?.status === 400)
        console.error('Error al validar el token: ' + error?.response?.data?.error.message);
      else console.error(error);
    }
    return null;
  };

  return verify;
};

export default useVerifyToken;
