import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'home',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'calendar',
      name: 'Asistencia',
      redirecTo:'/asistencia',
    },
    {
      icon: 'checkbox',
      name: 'Notas',
      redirecTo:'/notas',
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    
  ];
}
