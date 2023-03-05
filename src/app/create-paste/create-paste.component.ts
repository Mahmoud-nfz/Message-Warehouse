import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Paste } from '../paste';
import { PasteService } from '../paste.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paste',
  templateUrl: './create-paste.component.html',
  styleUrls: ['./create-paste.component.less']
})
export class CreatePasteComponent {
  paste: Paste = {
    title: 'Type your paste name here',
    body: '',
    language: 'plaintext',
    created: new Date(),
    updated: new Date(),
    views: 0
  };

  constructor(
    private pasteService : PasteService,
    private messageService: MessageService,
    private router: Router
  ) { }

  createPaste = () => {
    this.pasteService.addPaste(this.paste).subscribe(
      {
        next: (paste) => {
          this.messageService.add(`Paste ${paste.title} created`);
        },
        error: (err) => {
          this.messageService.add(`Error creating paste: ${err.message}`);
        },
        complete: () => {
          this.messageService.add('Paste created');
          // navigate to home page
          this.router.navigate(['/']);
        }
      }
    );
  }
}
