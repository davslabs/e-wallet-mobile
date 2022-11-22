export interface NewCreditCard {
  numero: string;
  codigoDeSeguridad: string;
  categoria: 'GOLD' | 'PLATINUM' | 'BLACK' | 'CLASSIC';
  tipo: 'VISA' | 'MASTERCARD';
  titular: string;
  fechaVencimiento: string;
}
