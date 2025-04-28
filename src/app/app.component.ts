import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: Item[] = [];
  newItem: string = '';
  editingItemId: number | null = null;
  editedName: string = '';

  constructor() {
    this.loadItems();
  }

  loadItems() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  addItem() {
    if (this.newItem.trim()) {
      const newItem: Item = {
        id: Date.now(),
        name: this.newItem.trim(),
      };
      this.items.push(newItem);
      this.newItem = '';
      this.saveItems();
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveItems();
  }

  startEdit(item: Item) {
    this.editingItemId = item.id;
    this.editedName = item.name;
  }

  updateItem() {
    if (this.editingItemId !== null) {
      const item = this.items.find(item => item.id === this.editingItemId);
      if (item) {
        item.name = this.editedName.trim();
        this.saveItems();
      }
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingItemId = null;
    this.editedName = '';
  }
}
