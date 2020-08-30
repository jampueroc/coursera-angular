import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Anime} from '../../models/anime';
import {flatMap} from 'rxjs/operators';
import {JikanService} from '../../services/jikan.service';
import {AnimeDetails} from '../../models/animeDetails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  anime: AnimeDetails;

  constructor(private route: ActivatedRoute, private jikan: JikanService) { }

  ngOnInit(): void {
    this.route.params.pipe(flatMap(params => {
      const id = params.id;
      return this.jikan.getAnime(id);
    })).subscribe(anime => {
      this.anime = anime;
    });
  }

}
