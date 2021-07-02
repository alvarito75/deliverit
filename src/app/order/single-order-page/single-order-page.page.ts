import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Order } from '../order.model';
import { AlertController } from '@ionic/angular';

// Import leaflet
import { Map, tileLayer, marker} from 'leaflet';

// Import rxjs
import { Subject }  from 'rxjs';

// This is added
import { NavigationExtras } from "@angular/router";
import { NativeGeocoder, NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";


@Component({
  selector: 'app-single-order-page',
  templateUrl: './single-order-page.page.html',
  styleUrls: ['./single-order-page.page.scss'],
})
export class SingleOrderPagePage implements OnInit {

  showMap: boolean = false;
  idOrder: number;
  private orders: Order[] = [];

  // Subscribe/observable feature
  private fooSubject = new Subject<string>();

  // Leaflet info
  address: string[];
  map: Map;
  newMarker: any;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private geocoder: NativeGeocoder, private alertController: AlertController) { }

  ngOnInit() {

    // get the argument from the URL
    this.route.paramMap.subscribe(params2 => {
      console.log(params2);

      // Validate if exists
      this.idOrder = parseInt(params2.get('idOrder'));
    });

    // Get product from Dataservice
    let order = this.dataService.getOrder(this.idOrder);
    console.log(typeof this.orders);
    this.orders.push(order);
    console.log(order);
  }

  // The below function is added
  ionViewDidEnter(){
    this.loadMap();
  }

  // Show product info
  showProductInfo(idProduct) {
    //console.log('hey showing info');
    this.router.navigate(['/product/' + idProduct]);
  }

  // Subscribe/observable feature
  updateAnyInfoInService() {
    console.log('Updating service...');
    let data = 'hey hello there';
    
    this.dataService.publishSomeData(data);
  }

  // Show map function only for testing
  showOrderMap() {
    console.log('hey showing map');
    //this.router.navigate(['/product/' + idProduct]);
  }

  // Leaflet is shown on Single Order page
  loadMap(){
    // Default Cochabamba: -17.390466562931994, -66.1693987310115
    this.map = new Map('mapId').setView([-17.390466562931994, -66.1693987310115], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
    .addTo(this.map); // This line is added to add the Tile Layer to our map
  }

  // Locate position when clicked on 'Mostrar dirección'
  async locatePosition() {
    this.map.locate({setView:true}).on("locationfound", (e: any)=> {
      this.newMarker = marker([e.latitude,e.longitude], {
        draggable: true
      }).addTo(this.map);

      this.newMarker.bindPopup("Tienda!").openPopup();
      this.getAddress(e.latitude, e.longitude);
     
      this.newMarker.on("dragend", ()=> {
        const position = this.newMarker.getLatLng();
        this.getAddress(position.lat, position.lng);
       });

       console.log('locatePosition');
       console.log(this.address);
    });
  }

   // The function is part of the Leaftleft funcionality
   getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.geocoder.reverseGeocode(lat, long, options).then(results => {
      this.address = Object.values(results[0]).reverse();
    });
  }

  // The function is part of the Leaftleft funcionality
  confirmPickupLocation() {
    let navigationextras: NavigationExtras = {
      state: {
        pickupLocation: this.address
      }
    };
    //this.router.navigate(["home"], navigationextras);
  }

  // Ask confirmation to create a Order.
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación!',
      message: 'Completar <strong>entrega</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Nothing to do');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Go to another page');
            this.router.navigate(['/order']);
          }
        }
      ]
    });

    await alert.present();

  }

}
