import { useCallback, useEffect, useState } from 'react';
import { Payment } from '../types/Payment';
import useAxiosPrivate from './useAxios';

export const usePayments = () => {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();

  const getPayment = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/payment');
      setPayments( data );
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPayment();
  }, [getPayment]);

  return { payments, isLoading, getPayment };
};
