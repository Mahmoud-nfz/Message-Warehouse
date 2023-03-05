import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Paste } from './paste';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasteService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPastes(): Observable<Paste[]> {
    return this.http.get<Paste[]>(this.baseUrl + '');
  }
  addPaste(paste: Paste): Observable<Paste>{
    return this.http.post<Paste>(this.baseUrl + '', paste);
  }
}
