import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _data: any;
  private _size: any[] = [];
  private _number: any[] = [];

  ngOnInit() {
    
  }

  printLCDNumber() {
    let couples = this._data.split(' ');
    for (let i = 0; i < couples.length; i++) {
      const couple = couples[i].split(',');
      for (let j = 0; j < couple.length; j++) {
        this._size[i] = +couple[0];
        this._number[i] = +couple[1];
      }      
    }
    console.log(this._size , this._number);
  }

}
