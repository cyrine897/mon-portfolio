import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})

export class ChatbotComponent implements OnInit {

  message = '';
  messages: any[] = [];
  isOpen = false;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isOpen = true;

      this.messages.push({
        sender: 'bot',
        text: "👋 Bonjour et bienvenue sur mon site ! Je suis Cyrine, comment puis-je vous aider ?"
      });

    }, 1500);
  }

  sendMessage() {

    if (!this.message) return;

    // message utilisateur
    this.messages.push({
      sender: 'user',
      text: this.message
    });

    // réponse bot (via service)
    this.chatbotService.sendMessage(this.message).subscribe((res: any) => {

      this.messages.push({
        sender: 'bot',
        text: res.reply
      });

    });

    this.message = '';
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
}