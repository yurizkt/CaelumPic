import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { rotasApp } from './app.routes';
import { RouterModule } from '@angular/router';
import { FotoService } from './foto.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { FiltroPorTituloPipe } from './filtro-por-titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    MensagemComponent,
    FiltroPorTituloPipe
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    PainelModule,
    RouterModule.forRoot(rotasApp),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
