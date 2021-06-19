import {Component} from '@angular/core';

@Component({
  selector: 'Receipt',
  templateUrl: './receipt.component.html'


})
export class ReceiptComponent {
  public title;
  public urlLink;


  constructor() {
    this.title = 'schabowy';
    this.urlLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fprzepisna.pl%2Fprzepis%2Fidealny-kotlet-schabowy%2F&psig=AOvVaw2YfX5fMnj-5ZbgdAP0bMHt&ust=1621781430171000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDu7OLE3fACFQAAAAAdAAAAABAD';
  }
}


