import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  //Importamos la libreria FormsModulo y la directiva ngModel para poder usar el Two Way Data Biding
  arrFormulario: any[] = [
   // {'titulo': 'Título', 'imagen': 'URL Imagen', 'texto': 'Texto', 'fecha': Date}
  ]

  newArticulo: any = {
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': ""
  }



  constructor() {}

  ngOnInit() {
    // Inicializar con dos artículos
    this.arrFormulario.push({
      'titulo': "Artículo 1",
      'imagen': "https://ejemplo.com/imagen1.jpg",
      'texto': "Texto del artículo 1",
      'fecha': "2024-02-02"
    });
    this.arrFormulario.push({
      'titulo': "Artículo 2",
      'imagen': "https://ejemplo.com/imagen2.jpg",
      'texto': "Texto del artículo 2",
      'fecha': "2024-02-02"
    });
  }


  guardar(){
    this.arrFormulario.push(this.newArticulo);
    this.newArticulo = {
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': ""
    }
    console.log(this.arrFormulario)
  }

  cargarDatos(): string {
    let html: string = "";
    this.arrFormulario.forEach((element: any) => {
      html += `<p>${element.titulo} - ${element.imagen} - ${element.texto} - ${element.fecha}</p>`
    })
    return html
  }
}
