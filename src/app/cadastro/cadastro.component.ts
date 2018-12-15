import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto = new FotoComponent()
  idFoto;
  mensagem;
  formCadastro: FormGroup

  constructor( private fotoService: FotoService, private route: ActivatedRoute, private roteador: Router, fb: FormBuilder ){

    this.idFoto = this.route.snapshot.params.idFoto
    if ( this.idFoto ){
      this.fotoService.obterFoto( this.idFoto )
        .subscribe( fotoDaApi => this.foto = fotoDaApi )
    }

    this.formCadastro = fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.required],
      descricao: ['', Validators.required]
    })

  }

  salvar(){
    if( this.foto._id ){
      this.fotoService.alterar( this.foto )
        .subscribe( retornoServico => {
          this.mensagem = retornoServico.mensagem
          setTimeout(() => this.roteador.navigate(['']), 2500)
        },
          erro => console.log(erro)
        )
    } else{
      this.fotoService.cadastrar( this.foto )
      .subscribe( retornoServico => {
          this.mensagem = retornoServico.mensagem
          this.foto = new FotoComponent() //para deixar os campos em branco
        },
        erro => console.log(erro)
      )
    }
  }

}
