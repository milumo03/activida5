import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFormulario } from '../../interfaces/iformulario.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  //Importamos la libreria FormsModulo y la directiva ngModel para poder usar el Two Way Data Biding
  arrFormulario: IFormulario[] = [
    {
      'titulo': "Artículo 1",
      'imagen': "https://ejemplo.com/imagen1.jpg",
      'texto': "Texto del artículo 1",
      'fecha': "2024-02-02"
    },
    {
      'titulo': "Artículo 2",
      'imagen': "https://ejemplo.com/imagen2.jpg",
      'texto': "Texto del artículo 2",
      'fecha': "2024-02-02"
    }
  ];

  newArticulo: IFormulario = {
    'titulo': "",
    'imagen': "",
    'texto': "",
    'fecha': ""
  };

  guardar(){
    // Verificar que todos los campos estén llenos
    if (this.camposValidos()) {
      this.arrFormulario.push(this.newArticulo);
      this.newArticulo = {
        'titulo': "",
        'imagen': "",
        'texto': "",
        'fecha': ""
      };
      console.log(this.arrFormulario);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }

  camposValidos(): boolean {
    // Función para validar si todos los campos están llenos
    return (
      this.newArticulo.titulo.trim() !== "" &&
      this.newArticulo.imagen.trim() !== "" &&
      this.newArticulo.texto.trim() !== "" &&
      this.newArticulo.fecha.trim() !== ""
    );
  }

  cargarDatos(): string {
    let html: string = "";
    this.arrFormulario.forEach((element: any) => {
      html += `<div class="articulo"><p>${element.titulo}</p><p>${element.imagen}</p><p>${element.texto}</p><p>${element.fecha}</p></div>`;
    });
    return html;
  }  
}
