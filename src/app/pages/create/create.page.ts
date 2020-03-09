import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createFilmForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder
  ) { 
    this.createFilmForm = formBuilder.group({
      filmName: ['', Validators.required],
      filmDescription: ['', Validators.required],
      imagen: ['', Validators.required],
      fecha: new Date().getTime()
    });
  }

  ngOnInit() {
  }

  async createFilm() {
    const loading = await this.loadingCtrl.create();

    const filmDescription = this.createFilmForm.value.filmDescription;
    const filmName = this.createFilmForm.value.filmName;
    const imagen = this.createFilmForm.value.imagen;
    const fecha = this.createFilmForm.value.fecha;

    this.firestoreService
    .createFilm(filmName, filmDescription, imagen, fecha)
    .then(
      () => {
        loading.dismiss().then(() => {
          
        });
      },
      error => {
        console.error(error);
      }
    );

    return await loading.present();
  }

}
