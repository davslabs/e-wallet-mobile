import { useCallback, useEffect, useState } from 'react';
import { NewCreditCard } from '../types/NewCreditCard';
import useAxiosPrivate from './useAxios';
import useUser from './useUser';

export const useCreditCards = () => {
  const { creditCards, saveCreditCards, updateCreditCardList } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();

  const getCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/tarjeta');

      saveCreditCards(data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveCard = async (card: NewCreditCard) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post('/tarjeta', card, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      updateCreditCardList(data);
    } catch (error: any) {
      if (error?.response) {
        console.error(`Error al agregar tarjeta: ${error?.response?.data?.error.message}`);
      } else {
        console.error(error.message);
      }

      return false;
    } finally {
      setIsLoading(false);
    }

    return true;
  };

  useEffect(() => {
    getCards();
  }, [getCards]);

  return { creditCards, isLoading, getCards, saveCard };
};
