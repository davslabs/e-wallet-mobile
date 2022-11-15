import { Movement as MovementType } from '../types/Movement';

export type StackNavigatorParamsList = {
  Home: undefined;
  MyCards: undefined;
  Login: undefined;
  SignUp: undefined;
  Movements: {
    movements: MovementType[];
  };
};
