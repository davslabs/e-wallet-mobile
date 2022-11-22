import { Movement as MovementType } from '../types/Movement';

export type StackNavigatorParamsList = {
  Home: undefined;
  MyCards: undefined;
  Login: undefined;
  Payment: undefined;
  Ticket: undefined;
  AppNavigator: undefined;
  SignUp: undefined;
  DrawerHome: undefined;
  AddCard: undefined;
  Movements: {
    movements: MovementType[];
  };
};
