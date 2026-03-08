import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  message = '';
  messages: any[] = [];

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {

    if(!this.message) return;

    this.messages.push({
      sender: 'user',
      text: this.message
    });

    this.chatbotService.sendMessage(this.message).subscribe((res:any)=>{

      this.messages.push({
        sender: 'bot',
        text: res.reply
      });

    });

    this.message = '';
  }
}


