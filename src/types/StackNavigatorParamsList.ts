import { Movement as MovementType } from '../types/Movement';

export type StackNavigatorParamsList = {
  Home: undefined;
  AppNavigator: undefined;
  MyCards: undefined;
  Login: undefined;
  SignUp: undefined;
  Drawer: undefined;
  AddCard: undefined;
  Movements: {
    movements: MovementType[];
  };
};
