import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
    name:string;
    place:string;

  constructor() {
    this.name='';
    this.place='chennai';
   }
      
  ngOnInit() {
  }

}
