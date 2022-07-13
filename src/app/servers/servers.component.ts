import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  username = '';
  allowResetUsername = false;
  passwordIsHidden = false;
  clickOnDetailsBtnArray = [];
  numberOfClicksOnDetailsBtn = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUsernameInput() {
    if (this.username !== '') {
      this.allowResetUsername = true;
    } else {
      this.allowResetUsername = false;
    }
  }

  onResetUsername() {
    this.username = '';
    this.allowResetUsername = false;
  }

  onDisplayDetails(event) {
    this.numberOfClicksOnDetailsBtn++;
    this.passwordIsHidden = !this.passwordIsHidden;

    this.clickOnDetailsBtnArray.push(this.numberOfClicksOnDetailsBtn);
  }
}
