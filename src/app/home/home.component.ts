import { Component, OnInit } from '@angular/core';
import {Season} from '../models/season';
import {JikanService} from '../services/jikan.service';
import {first} from 'rxjs/operators';
import {LocalStorage} from 'ngx-webstorage';
import {Genre} from '../models/genre';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Anime} from '../models/anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @LocalStorage('adsad') selectedSeason: Season;
  listAnime: Anime[] = [];
  constructor(private jikan: JikanService) { }

  ngOnInit(): void {
    const year = new Date().getFullYear();
    const season = 'summer';
    if (this.selectedSeason == null || this.selectedSeason.season_year !== year ||
      this.selectedSeason.season_name !== season){
      this.jikan.getSeason(year, season).pipe(first()).toPromise().then(s => {
        this.selectedSeason = s;
        this.filterList('');
      });
    }else {
      this.filterList('');
    }
  }
   filterList(word: string): boolean{
    this.listAnime = this.selectedSeason.anime
      .filter(a => a.title.toLowerCase().includes(word.toLowerCase()) || a.synopsis.toLowerCase().includes(word.toLowerCase()))
      .sort((a, b) =>
        new Date(b.airing_start).getTime() - new Date(a.airing_start).getTime());
    return false;
  }

  parseGenres(genres: Genre[]): string{
    return genres.map(g => g.name).join(', ');
  }

}
