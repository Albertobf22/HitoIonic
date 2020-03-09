import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/film.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public film: Observable<Film>;
  public filmId: string;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.filmId = this.route.snapshot.paramMap.get('id');
    this.film = this.firestoreService.getFilmDetail(this.filmId).valueChanges();
  }

  deleteFilm() {
    this.firestoreService.deleteFilm(this.filmId);
  }


}
