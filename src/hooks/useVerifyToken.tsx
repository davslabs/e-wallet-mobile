import { getItemAsync } from 'expo-secure-store';
import axios from '../api/axios';

const useVerifyToken = () => {
  const verify = async () => {
    const restoredToken = await getItemAsync('accessToken');
    if (!restoredToken) return null;
    try {
      const { data: accessToken } = await axios.post(
        '/auth/verify',
        {},
        { headers: { Authorization: `Bearer ${restoredToken}` } }
      );
      return accessToken;
    } catch (error: any) {
      if (error?.response?.status === 401) console.error('Usuario no autorizado');
      else if (error?.response?.status === 400)
        console.error('Error al validar el token: ' + error?.response?.data?.message);
      else if (error?.response?.status === 404) console.error('Usuario no encontrado');
      else console.error(error);
    }
    return null;
  };

  return verify;
};

export default useVerifyToken;
