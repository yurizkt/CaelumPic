import { NgModule } from '@angular/core'
import { FotoComponent } from './foto.component'
import { FiltroPorTituloPipe } from '../filtro-por-titulo.pipe';

@NgModule({
    declarations: [ FotoComponent ],
    exports: [ FotoComponent ]
})
export class FotoModule { }