import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstName = '';
  lastName = '';
  email = '';
  interest = '';
  message = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const body = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      interest: this.interest,
      message: this.message
    };

    this.http.post('http://localhost:3000/send-email', body)
      .subscribe({
        next: (res: any) => alert(res.message),
        error: (err) => alert('Erreur lors de l’envoi du mail')
      });
  }
}

