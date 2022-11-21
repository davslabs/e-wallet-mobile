import { canUseDom } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import { CreditCard } from '../types/CreditCard';
import { NewCreditCard } from '../types/NewCreditCard';
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

  const saveCard = async (card: NewCreditCard) => {
    setIsLoading(true);
    try {
      await axios.post('/tarjeta', card,
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    } catch (error: any) {
      if (error?.response) {
        console.error(`Error al agregar tarjeta: ${error?.response?.data?.error.message}`);
      } else {
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
    return true;
  }

  useEffect(() => {
    getCards();
  }, [getCards]);

  return { cards, isLoading, getCards, saveCard };
};
