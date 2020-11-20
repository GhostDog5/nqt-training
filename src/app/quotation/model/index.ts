export type TransportMode = 'air' | 'sea' | 'road';
export type QuotationStatus = 'in progress' | 'ready';
export interface CustomerAddres {
  city: string;
  street: string;
  phoneNumber: string;
  email: string;
}
export interface Customer {
  name: string;
  industry: string;
  adress: CustomerAddres;
}
export interface Quotation {
  id?: string;
  creationDate: Date;
  transportMode: TransportMode;
  status: QuotationStatus;
  customer: Customer;
}

