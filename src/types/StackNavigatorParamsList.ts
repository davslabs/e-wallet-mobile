import { Movement as MovementType } from '../types/Movement';

export type StackNavigatorParamsList = {
  Home: undefined;
  MyCards: undefined;
  Login: undefined;
  Drawer: undefined;
  Movements: {
    movements: MovementType[];
  };
};
