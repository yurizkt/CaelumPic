import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{

  public listaFotos: FotoComponent[] = [];
  public mensagem
  
  constructor ( private fotoService: FotoService) { }

  ngOnInit(){

    this.fotoService.listar()
    .subscribe(
      res => this.listaFotos = res,
      error => console.log(error)
    )

  }

  remover( foto: FotoComponent ): void{
    this.fotoService
      .deletar( foto )
      .subscribe(
        () => {
          this.mensagem = `Foto ${foto.titulo} apagada com sucesso`
          this.listaFotos = this.listaFotos.filter( f => f._id !== foto._id )

          setTimeout(
            () => this.mensagem = '',
            2000
          )
        },
        erro => console.log(erro)
      )
  }

}
