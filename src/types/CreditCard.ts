export interface CreditCard {
  suffix: string;
  categoria: 'GOLD' | 'PLATINUM' | 'BLACK' | 'CLASSIC';
  tipo: 'VISA' | 'MASTERCARD';
  titular: string;
  fechaVencimiento: string;
  id: string;
}
