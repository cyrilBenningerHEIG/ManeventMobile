import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { QimgImage } from '../../../models/qimg-image';
import { PictureService } from '../../../services/picture/picture.service';

import { Event } from '../../../models/event';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  newEvent: Event;
  routeParams: Params;
  pictureData: string;
  picture: QimgImage;
  events: Event;


  constructor(private auth: AuthService, private http: HttpClient, private router: Router, private camera: Camera, private pictureService: PictureService,private activatedRoute: ActivatedRoute) {
    this.newEvent = new Event();
  }
  ngOnInit() {
    this.GetData();

  }
  GetData(){
    this.getRouteParams();
    const AddUserURL = '/api/events/' + this.routeParams['id'];
    return this.http.get<Event>(AddUserURL).subscribe(result => {
      this.events = result;
    }, err => { }
    )
  };
  getRouteParams() {

    // Route parameters
    this.activatedRoute.params.subscribe(params => {
      this.routeParams = params;
    });
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
    });
  }
  uploadPicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      console.log("ta race");
    }

    const NominatimURL = "https://nominatim.openstreetmap.org/search?q=";
    this.http.get(NominatimURL + this.newEvent["adress"] + '&format=geojson&limit=1').subscribe(result => {
      let geodata = result['features']['0']['geometry'];

      this.newEvent['location'] = {
        'type': geodata['type'],
        'coordinates': geodata['coordinates']
      };
      const AddUserURL = '/api/events/'+this.routeParams['id'];
      this.http.patch(AddUserURL, this.newEvent).subscribe({
        next: () => {
          console.log(this.newEvent);
          this.router.navigateByUrl('');
        },
        error: err => {
          //this.userError = true;
          console.warn(`Authentication failed: ${err.message}`);

        }
      });

    })




  }

}
