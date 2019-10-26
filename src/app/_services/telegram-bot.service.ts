import { Injectable } from '@angular/core';
import { AuthenticationService } from '.';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';
import { Challenge } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class TelegramBotService {
  token = (environment as any).telegramBot;
  chat_id = (environment as any).chart_id;

  constructor(public authService: AuthenticationService, public http: HttpClient) {}

  userStartChallenge(challenge: Challenge) {
    if (this.authService.currentUserValue.firstName) {
      const message = `User ${this.authService.currentUserValue.firstName}\n start challenge ${challenge.name}`;
      this.http
        .get<any>(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${message}`)
        .subscribe();
    }
  }
}
