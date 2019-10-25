import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }
}
