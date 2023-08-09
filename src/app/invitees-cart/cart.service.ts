import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _isOpen = new BehaviorSubject(
    window.matchMedia("(min-width: 48rem)").matches
  );

  get isOpen(): Observable<boolean> {
    return this._isOpen.asObservable();
  }

  toggleOpen(): void {
    this._isOpen.next(!this._isOpen.getValue());
  }

}
