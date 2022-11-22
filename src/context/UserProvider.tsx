import { Movement } from '../types/Movement';
import { CreditCard } from '../types/CreditCard';
import { createContext, useMemo, useState } from 'react';

export type UserContextType = {
  creditCards: CreditCard[];
  movements: Movement[];
  saveMovements: (movement: Movement[]) => void;
  saveCreditCards: (creditCard: CreditCard[]) => void;
  updateCreditCardList: (creditCard: CreditCard) => void;
  updateMovementList: (movement: Movement) => void;
};

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [movements, setMovements] = useState<Movement[]>([]);

  const saveMovements = (movements: Movement[]) => {
    setMovements(movements);
  };

  const updateMovementList = (movement: Movement) => {
    setMovements((prevMovements: Movement[]) => [movement, ...prevMovements]);
  };

  const saveCreditCards = (creditCard: CreditCard[]) => {
    setCreditCards(creditCard);
  };

  const updateCreditCardList = (creditCard: CreditCard) => {
    setCreditCards((prevCreditCards: CreditCard[]) => [creditCard, ...prevCreditCards]);
  };

  const contextValue = useMemo(
    () => ({
      creditCards,
      movements,
      saveMovements,
      saveCreditCards,
      updateMovementList,
      updateCreditCardList,
    }),
    [creditCards, movements],
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContext;
