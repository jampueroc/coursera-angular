import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Anime} from '../../models/anime';
import {Genre} from '../../models/genre';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @HostBinding('class') class = 'col-md-4 mb-2';
  @Input() anime: Anime;
  constructor() { }

  ngOnInit(): void {
  }

  parseGenres(genres: Genre[]): string{
    return genres.map(g => g.name).join(', ');
  }

}
