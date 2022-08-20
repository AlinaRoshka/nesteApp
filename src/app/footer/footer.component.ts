import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  collegeName: string = 'INT';
  addres: string = 'Habanaim 17, TEL-AVIV';
  tel: string = '03-7458622';
  constructor() {}

  ngOnInit(): void {}
}
