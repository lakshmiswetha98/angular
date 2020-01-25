import { Component, OnInit } from '@angular/core';
import { Media } from '../media/model/mediamodel';

@Component({
  selector: 'media-base',
  templateUrl: './media-base.component.html',
  styleUrls: ['./media-base.component.css']
})
export class MediaBaseComponent implements OnInit {
 media:Array<Media>;
  constructor() { 
    this.media=[
      new Media("first","hello","h","java"),
      new Media("second","hi","hi","angular"),
      new Media("third","fun","f","bootstrap"),

    ];
  }
  savemedia(txttitle:HTMLInputElement,txtdesc:HTMLInputElement,txttag:HTMLInputElement,txtfilename:HTMLInputElement):void
  { 
   let media=new Media(txttitle.value,txtdesc.value,txttag.value,txtfilename.value);
   this.media.push(media);
   txttitle.value = "";
   txtdesc.value="";
   txttag.value="";
   txtfilename.value="";
   
  }
  ngOnInit() {
  }

}
