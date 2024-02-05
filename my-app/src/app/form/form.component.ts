import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent implements OnInit {
  username: string = '';
  isDisabled: boolean = true;

  constructor() {}

  // onUpdateUsername(event: Event) {
  //   this.username = (<HTMLInputElement>event.target).value;
  //   console.log(this.username);
  // }

  updateButtonStatus() {
    this.username.length === 0 ? this.isDisabled = true : this.isDisabled = false;
    console.log(this.isDisabled);
  }

  clearUsername() {
    this.username = '';
    console.log(this.username);
  }

  ngOnInit() {
  }
}
