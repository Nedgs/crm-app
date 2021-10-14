export enum OrderStateEnum {
  ANNULE = 'Annulé',
  OPTION = 'Option',
  CNFIRME = 'Confirmé'
}

export interface Order {
  id: number | null;
  typePresta: string | null;
  client: string | null;
  nbJours: number;
  tjmHt: number;
  tva: number;
  state: string | null;
}
