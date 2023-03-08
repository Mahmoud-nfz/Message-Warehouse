import { Injectable } from '@angular/core';

interface Message {
  type: string;
  text: string;
  created: Date;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  add(message: string,type: string = 'Success') {
    this.messages.push({ type, text: message, created: new Date()});
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }
}
