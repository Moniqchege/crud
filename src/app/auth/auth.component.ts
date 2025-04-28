import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  loginEmail = '';
  loginPassword = '';
  registerEmail = '';
  registerPassword = '';
  registerConfirmPassword = '';

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  login() {
    console.log('Logging in with', this.loginEmail, this.loginPassword);
  }

  register() {
    if (this.registerPassword === this.registerConfirmPassword) {
      console.log('Registering with', this.registerEmail, this.registerPassword);
    } else {
      alert('Passwords do not match!');
    }
  }
}
