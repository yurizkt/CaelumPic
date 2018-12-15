import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FotoComponent } from './foto/foto.component';

@Injectable()
export class FotoService {

  cabecalho = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  } 

  url = 'http://localhost:3001/v1/fotos/';

  constructor( private http: HttpClient ) { }

  listar(): Observable<FotoComponent[]>{
    return this.http.get<FotoComponent[]>(this.url)
  }

  cadastrar( foto: FotoComponent ): Observable<MensagemServico>{
    return this.http
      .post<MensagemServico>( this.url, JSON.stringify(foto), this.cabecalho )
      .pipe(
        map(
          () => new MensagemServico(`Foto ${foto.titulo} salva com sucesso!`)
        )
      )
  }

  deletar( foto: FotoComponent ){
    return this.http
      .delete( this.url + foto._id, this.cabecalho) 
      .pipe(
        map(
          () => ({ mensagem: `Foto ${foto.titulo} deletada com sucesso`, tipo: 'success'})
        )
      )
  }

  obterFoto( idFoto: string ): Observable<FotoComponent>{
    return this.http.get<FotoComponent>(this.url + idFoto)
  }

  alterar( foto: FotoComponent ): Observable<MensagemServico>{
    return this.http
      .put<MensagemServico>(this.url + foto._id, JSON.stringify(foto), this.cabecalho)
      .pipe(
        map(
          () => new MensagemServico(`Foto ${foto.titulo} salva com sucesso!`)
        )
      )
  }

}

export class MensagemServico{

  constructor( private _mensagem: string ){ }

  public get mensagem(): string{
    return this._mensagem;
  }
}
