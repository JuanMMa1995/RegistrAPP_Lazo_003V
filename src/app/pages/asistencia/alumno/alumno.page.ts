import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit{

  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit(){

  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.format;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
