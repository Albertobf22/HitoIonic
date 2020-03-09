import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Film } from '../../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

  createFilm(
    filmDescription: string,
    filmName: string,
    imagen: string,
    fecha: any
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`filmList/${id}`).set({
      id,
      filmName,
      filmDescription,
      imagen,
      fecha,
    });
  }

  getFilmList(): AngularFirestoreCollection<Film> {
    return this.firestore.collection(`filmList`);
  }

  getFilmDetail(filmId: string): AngularFirestoreDocument<Film> {
    return this.firestore.collection('filmList').doc(filmId);
  }

  deleteFilm(filmId: string): Promise<void> {
    return this.firestore.doc(`filmList/${filmId}`).delete();
  }

}
