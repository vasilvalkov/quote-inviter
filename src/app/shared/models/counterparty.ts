export interface Counterparty {
  _id: string;
  picture: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  groups?: string[];
}