import { Component, Input, OnInit } from '@angular/core';
import { cuadroEnum } from './cuadroEnum';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {
  @Input() public piece: cuadroEnum = cuadroEnum.EMPTY;
  @Input() public row: number;
  @Input() public col: number;
  constructor() { }

  ngOnInit() {
  }

  
}
