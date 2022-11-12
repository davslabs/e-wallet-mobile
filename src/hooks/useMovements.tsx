import { useCallback, useEffect, useState } from 'react';
import { Movement } from '../types/Movement';
import useAxiosPrivate from './useAxios';
import { MovementFilter } from '../types/MovementFilter';


export const useMovements = (filterParams?: MovementFilter) => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();
  const getMovements = useCallback(async (filterParams?: any) => {
    setIsLoading(true);
    let url = '/movimiento';
    let connector = '?';
    if (filterParams?.maxItems) {
      url += connector + 'cant=' + filterParams.maxItems;
      connector = '&';
    }
    try {
      const { data } = await axios.get(url);
      setMovements(data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovements(filterParams);
  }, [getMovements]);

  return { movements, isLoading, getMovements };
};
