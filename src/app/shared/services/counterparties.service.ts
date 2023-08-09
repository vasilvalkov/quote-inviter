import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Counterparty } from '../models/counterparty';
import { InviteesService } from './invitees.service';
import { GroupContact, IndividualContact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class CounterpartiesService {

  private _counterparties = new BehaviorSubject<Counterparty[]>([]);

  constructor(
    private http: HttpClient,
    private inviteesService: InviteesService
  ) { }

  get counterpaties(): Observable<Counterparty[]> {
    return this._counterparties.asObservable();
  }

  fetchAllCounterparties(): Observable<Counterparty[]> {
    return this.http.get<Counterparty[]>('assets/data.json').pipe(
      tap(value => this._counterparties.next(value)),
      tap(value => this.inviteesService.individuals.next(this.mapToIndividuals(value))),
      tap(() => this.inviteesService.groups.next(this.extractGroups(this.inviteesService.individuals.getValue())))
    );
  }

  private mapToIndividuals(counterparties: Counterparty[]): IndividualContact[] {
    return counterparties.map(counterparty => {
      return {
        id: counterparty._id,
        name: `${counterparty.name.first} ${counterparty.name.last}`,
        data: counterparty,
        selected: false,
        type: 'individual'
      };
    });
  }

  private extractGroups(value: IndividualContact[]): GroupContact[] {
    const groupsMap = new Map<string, IndividualContact[]>();

    value.forEach(contact => {
      contact.data.groups?.forEach(group => {
        if (groupsMap.has(group)) {
          const nextValue = [...groupsMap.get(group), contact];
          groupsMap.set(group, nextValue);
        } else {
          groupsMap.set(group, [contact]);
        }
      });
    });

    const groups: GroupContact[] = [...groupsMap.entries()].map(([name, counterparties]) => {
      return {
        id: window.isSecureContext ? window.crypto.randomUUID() : Math.random().toString(),
        data: { counterparties },
        name,
        selected: false,
        type: 'group'
      };
    });

    return groups;
  }
}
