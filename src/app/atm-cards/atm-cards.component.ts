import { Component } from '@angular/core';
import { AtmCardService } from '../services/atm-card.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atm-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './atm-cards.component.html',
  styleUrl: './atm-cards.component.css'
})
export class AtmCardsComponent {
accounts: any[] = [];
atmCard = {
  accountId: '',
  cardNumber: '',
  cardType: '',
  expiryDate: ''
};

constructor(
  private atmCardService: AtmCardService
){}

onSubmit() {
  const newAtmCard = {
    ...this.atmCard,
    id: new Date().getTime().toString(),
  };
  this.atmCardService.saveAtmCard(newAtmCard);
}
}
