export enum OrderStateEnum {
  ANNULE = 'Annulé',
  OPTION = 'Option',
  CNFIRME = 'Confirmé'
}

export interface Order {
  id: number | null;
  typePresta: string | null;
  client: string | null;
  nbJours: string | null;
  tjmHt: string | null;
  state: string | null;
}
