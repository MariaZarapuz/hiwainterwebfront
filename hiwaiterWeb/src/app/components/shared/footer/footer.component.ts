import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  msg = {
    COPYRYGHT: 'Hi Waiter Copyright 2020',
    FACEBOOK: 'Facebook',
    TWITTER: 'Twitter',
    LINKEDIN: 'Liknkedin',
    INSTAGRAM: 'Instagram'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
