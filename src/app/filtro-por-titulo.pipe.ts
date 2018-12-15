import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto/foto.component';

@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform {

  transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
    digitado = digitado.toLowerCase();
    return fotos.filter( foto => foto.titulo.toLocaleLowerCase().includes(digitado) );
  }

}
