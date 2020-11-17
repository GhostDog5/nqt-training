export type TransportMode = 'air' | 'sea' | 'road';
export type QuotationStatus = 'in progress' | 'ready';

export interface Quotation {
  id?: string;
  creationDate: Date;
  transportMode: TransportMode;
  status: QuotationStatus;
}
