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
    const CreditCardRegex = '(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)';
    const CVVRegex = '^[0-9]{3, 4}$';
    if (!card.categoria) throw new Error('La categoría de la tarjeta no es válida');
    if (!card.codigoDeSeguridad || !card.codigoDeSeguridad.match(CVVRegex)) throw new Error('el código de seguridad no es válido');
    if (!card.fechaVencimiento) throw new Error('La fecha de vencimiento no es válida');
    if (!card.numero || !card.numero.match(CreditCardRegex)) throw new Error('El numero de la tarjeta no es válido');
    if (!card.tipo) throw new Error ('El tipo de la tarjeta no es válido');
    if (!card.titular) throw new Error('Ingrese el nombre del titular de la tarjeta');

    setIsLoading(true);
    try {
      const response = await axios.post('/tarjeta', card,
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
      setIsLoading(false);
      if (response.status.valueOf() === 201) {
        return true;
      }
    } catch (error: any) {
      if (error?.response) {
        console.error(`Error al agregar tarjeta: ${error?.response?.data?.error.message}`);
      } else {
        console.error(error.message);
      }
    }
    return false;
  }

  useEffect(() => {
    getCards();
  }, [getCards]);

  return { cards, isLoading, getCards, saveCard };
};
