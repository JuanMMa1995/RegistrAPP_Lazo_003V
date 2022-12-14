import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage{

  qrCodeNString= 'Hola Mundo';
  qrCodeFString= 'Hola Mundo';
  qrCodeCString= 'Hola Mundo';
  
  scannedResultN:any;
  scannedResultF:any;
  scannedResultC:any;

  constructor() { }

  usuario={
    nom:'',
    fecha:'',
    codigo:'',
  }

  generaScan(){
    this.qrCodeNString= this.usuario.nom,
    this.qrCodeFString= this.usuario.fecha,
    this.qrCodeCString= this.usuario.codigo;
  }

  verScan(){
    this.scannedResultN=this.qrCodeNString,
    this.scannedResultF=this.qrCodeFString,
    this.scannedResultC=this.qrCodeCString;
  }

}
