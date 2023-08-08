import { Counterparty } from './counterparty';

interface ContactBase {
  id: string;
  name: string;
  selected: boolean;
}

export interface GroupContact extends ContactBase {
  data: { counterparties: IndividualContact[] }
  type: 'group';
}

export interface IndividualContact extends ContactBase {
  data: Counterparty;
  type: 'individual';
}

export type Contact = IndividualContact | GroupContact;