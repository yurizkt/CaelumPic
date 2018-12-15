import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  public _id: string;
  @Input() public url: string = '';
  @Input() public titulo: string = '';
  public descricao: string = '';

  constructor() { }

  ngOnInit() {
  }

}
