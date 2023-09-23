import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

  imageWidth: number = 100;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

  productos: IProductos[] = [
    {
      "Modelo": 'Sentra',
      "Descripcion": "4 puertas familiar",
      "Year": "Febrero 2 2022",
      "Precio": 120000,
      "Marca": "Nissan",
      "Color": "Azul",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "Modelo": 'A7',
      "Descripcion": "4 puertas familiar",
      "Year": "Marzo 5 2019",
      "Precio": 420000,
      "Marca": "Audi",
      "Color": "Negro",
      "ImagenUrl": "https://images.kavak.services/images/156039/EXTERIOR-frontSidePilotNear-1642454627398.jpeg?d=540x310"
    },
    {
      "Modelo": 'Rio',
      "Descripcion": "4 puertas familiar",
      "Year": "Febrero 2 2020",
      "Precio": 120000,
      "Marca": "KIA",
      "Color": "Gris",
      "ImagenUrl": "https://caribbeanautopr.com/wp-content/uploads/2020/02/kia-rio-sedan-2020-puerto-rico.jpg"
    }
  ]

}
