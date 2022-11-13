import { useCallback, useEffect, useState } from 'react';
import { Movement } from '../types/Movement';
import useAxiosPrivate from './useAxios';

export const usePayments = () => {
    const [movements, setMovements] = useState<Movement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();

  const getPayment = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/payment');
      setMovements( data );
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPayment();
  }, [getPayment]);

  return { movements, isLoading, getPayment };
};
