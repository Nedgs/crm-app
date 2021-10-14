export enum ClientStateEnum {
  ACTIF = 'Actif',
  INACTIF = 'Inactif',
  ERROR = 'Error'
}

export interface Client {
  id: number | null;
  name: string | null;
  ca: number;
  state: ClientStateEnum;
}
