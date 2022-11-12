import { Movement as MovementType } from '../types/Movement';

export type StackNavigatorParamsList = {
  Home: undefined,
  MyCards: undefined,
  Login: undefined,
  Movements: {
    movements: MovementType[]
  };
};
