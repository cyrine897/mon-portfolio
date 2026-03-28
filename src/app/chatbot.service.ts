import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import {  of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:4200/chat';

  constructor(private http: HttpClient) {}

  // Dictionnaire de réponses basées sur mots-clés
  private responses: any = {
    "qui es-tu": "Je suis Cyrine Mezzi, ingénieur IT spécialisée en Azure, DevOps et infrastructure.",
    "c'est qui cyrine": "Cyrine Mezzi est une ingénieure IT passionnée par le Cloud, DevOps et l'automatisation.",
    "quelles sont tes compétences": "Je travaille sur Azure, Linux, scripting, automatisation cloud et DevOps.",
    "comment te contacter": "Vous pouvez me contacter via mon email ou LinkedIn.",
    "cv": "Je suis ingénieur IT spécialisée en Cloud et DevOps. Consultez mon CV dans la section parcours.",
    "experience": "J'ai plusieurs expériences en administration système, Cloud et DevOps.",
    "profil": "Je suis passionnée par le Cloud, DevOps et l'automatisation des infrastructures."
  };

  // Phrases de bienvenue aléatoires pour rendre le bot plus humain
  private greetings = [
    "Bonjour 😊 Comment puis-je vous aider ?",
    "Salut ! Que puis-je faire pour vous aujourd'hui ?",
    "Hello 👋 Je suis là pour répondre à vos questions !",
    "Bonjour ! Ravi de vous voir ici, comment puis-je vous aider ?"
  ];

  sendMessage(message: string): Observable<any> {
    const msg = message.toLowerCase().trim();
    let reply = "Désolé, je n'ai pas compris votre question 😅";

    // Réponses aléatoires pour les salutations
    if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")) {
      reply = this.greetings[Math.floor(Math.random() * this.greetings.length)];
      return of({ reply });
    }

    // Vérification des mots-clés dans le dictionnaire
    for (let key in this.responses) {
      if (msg.includes(key)) {
        reply = this.responses[key];
        break;
      }
    }

    return of({ reply });
  }
}
