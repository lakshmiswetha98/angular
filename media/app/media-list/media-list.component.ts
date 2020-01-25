import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../media/model/mediamodel';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  @Input()
  mediaList: Array<Media>;

  constructor() { }

  ngOnInit() {
  }

}
