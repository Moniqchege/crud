import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtmCardService {

  private localStorageKey = 'atmCards';

  constructor() { }

  saveAtmCard(card: any): void {
    const atmCards = this.getAtmCards();
    atmCards.push(card);
    localStorage.setItem(this.localStorageKey, JSON.stringify(atmCards))
  }

  getAtmCards():any[] {
    const atmCards = localStorage.getItem(this.localStorageKey);
    return atmCards ? JSON.parse(atmCards) : [];
  }
}
