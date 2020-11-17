export interface Order {
  id: number;
  businessKey: string;
  creationDate: Date;
  items?: number;
}

export interface OrderSearch {
  businessKey: string;
}


