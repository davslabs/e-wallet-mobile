export interface Payment {
  id: string;
  monto: number;
  descripcion: string;
  usuario: string;
  tarjeta: string;
  fechaHora: Date;
}
