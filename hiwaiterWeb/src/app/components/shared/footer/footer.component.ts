import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  msg = {
    copyright: 'Hi Waiter Copyright 2020'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
