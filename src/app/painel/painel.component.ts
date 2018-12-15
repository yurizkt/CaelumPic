import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

  @Input() titulo: string

  ngOnInit(){
    this.titulo = this.titulo.length > 7 ? `${this.titulo.substr(0, 7)}...` : this.titulo
  }

}
