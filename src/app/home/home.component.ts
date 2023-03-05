import { Component } from '@angular/core';
import { Paste } from '../paste';
import { PasteService } from '../paste.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent {
    constructor(private pasteService: PasteService, private messageService: MessageService) { }
    pastes : Paste[] = [];
    selectedPaste?: Paste;
    getPastes(): void {
        this.pasteService.getPastes().subscribe(pastes => this.pastes = pastes);
    }
    onSelect(paste: Paste): void {
        this.selectedPaste = paste;
        this.messageService.add(`PastesComponent: Selected paste id=${paste.id}`);
    }
    ngOnInit(): void {
        this.getPastes();
    }
}
