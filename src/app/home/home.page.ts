import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public filmList;
  constructor(
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.filmList = this.firestoreService.getFilmList().valueChanges();
  }

}
