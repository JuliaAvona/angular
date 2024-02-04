import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewSerwer: boolean = false;
  serverName: string = '';
  serwerCreationStatus: string = 'No server was created!';

  constructor() {
    setTimeout(() => this.allowNewSerwer = true, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serwerCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event.target.value);
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}
