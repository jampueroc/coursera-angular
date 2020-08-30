import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Season, Seasons} from '../models/season';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AnimeDetails} from '../models/animeDetails';

@Injectable({providedIn: 'root'})
export class JikanService {
  private baseUrl = 'https://api.jikan.moe/v3/';

  constructor(private http: HttpClient) { }

  getSeason(year: number, season: Seasons): Observable<Season>{
    const url = this.baseUrl + `season/${year}/${season}`;
    return this.http.get(url).pipe(map(s => s as Season));
  }
  getAnime(id: string): Observable<AnimeDetails>{
    const url = this.baseUrl + 'anime/' + id;
    return this.http.get(url).pipe(map(a => a as AnimeDetails));
  }
}
