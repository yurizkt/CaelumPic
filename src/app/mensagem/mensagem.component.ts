import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html'
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'light'

  constructor() { }

  ngOnInit() {
  }

}
