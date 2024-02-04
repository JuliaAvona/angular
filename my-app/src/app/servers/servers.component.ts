import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewSerwer = false;
  serwerCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => this.allowNewSerwer = true, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serwerCreationStatus = 'Server was created';
  }
}
