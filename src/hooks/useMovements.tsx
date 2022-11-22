import { useCallback, useEffect, useState } from 'react';
import { Movement } from '../types/Movement';
import useAxiosPrivate from './useAxios';
import { MovementFilter } from '../types/MovementFilter';
import { NewMovement } from './../types/NewMovement';
import useUser from './useUser';

export const useMovements = (filterParams?: MovementFilter) => {
  const { movements, saveMovements, updateMovementList } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const axios = useAxiosPrivate();
  const getMovements = useCallback(async () => {
    setIsLoading(true);
    let url = '/movimiento?cant=100';
    try {
      const { data } = await axios.get(url);

      saveMovements(data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addMovement = useCallback(async (movement: NewMovement) => {
    setIsLoading(true);
    let url = '/movimiento';
    try {
      const { data } = await axios.post(url, movement);

      const newMovement: Movement = {
        id: data.id,
        monto: data.monto,
        descripcion: data.descripcion,
        tarjeta: data.tarjeta,
        fechaHora: data.fechaHora,
        usuario: data.usuario,
      };

      updateMovementList(newMovement);

      return data;
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovements();
  }, [getMovements]);

  return { movements, isLoading, getMovements, addMovement };
};
