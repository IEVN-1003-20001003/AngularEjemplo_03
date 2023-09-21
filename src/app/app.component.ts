import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo_03';

  duplicaValor(valor:number):number{
    return valor*2;
  }
  pelicula = {
    titulo:'Spider-Man',
    fechaLanzamiento:new Date(),
  }
}

