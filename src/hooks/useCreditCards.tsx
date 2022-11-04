import { useCallback, useEffect, useState } from 'react';
import { CreditCard } from '../types/CreditCard';
import useAxiosPrivate from './useAxios';

export const useCreditCards = () => {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();

  const getCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/tarjeta');
      setCards(data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return { cards, isLoading, getCards };
};
