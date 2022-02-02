import { Component, OnInit } from '@angular/core';
import { cuadroEnum } from '../cuadro/cuadroEnum';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
private currentPlayer: cuadroEnum;
public board: cuadroEnum[][];
private isGameOver: boolean;
public statusMessage;
startedGame: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  initGame(){
    this.startedGame = true;
    this.newGame();
  }

  exitGame(){
    this.startedGame = false;
  }

  get gameOver(): boolean{
    return this.isGameOver;
  }

  newGame(){
    this.board = [];
    for (let row = 0; row < 3; row++) {
      this.board[row] = [];
      for (let col = 0; col < 3; col++) {
        this.board[row][col] = cuadroEnum.EMPTY;
      }
    }
    this.currentPlayer = cuadroEnum.X;
    this.statusMessage = "Turno del jugador "+this.currentPlayer;
    this.isGameOver = false;
  }

  move(row: number, col: number): void {
    if(!this.isGameOver && this.board[row][col] === cuadroEnum.EMPTY){
      this.board[row][col] = this.currentPlayer;
      if(this.isDraw()){
        this.statusMessage = "Empate :(";
        this.isGameOver = true;
      } else if(this.isWin()){
        alert(this.statusMessage = "El jugador "+this.currentPlayer+" ganó");
        this.isGameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === cuadroEnum.X ? cuadroEnum.O : cuadroEnum.X;
        //this.statusMessage = "Turno del jugador "+this.currentPlayer;
      }
    }
  }

  isDraw(): boolean{
    for (const columns of this.board){
      for (const col of columns){
        if (col === cuadroEnum.EMPTY){
          return false;
        }
      }
    }
    return !this.isWin();
  }

  isWin(): boolean{
    //horizontal
    for (const columns of this.board) {
      if(columns[0] === columns[1] && columns[0] === columns[2] && columns[0] !== cuadroEnum.EMPTY){
        return true;
      }
    }
    //vertical
    for(let col = 0; col < this.board[0].length; col++){
      if(
        this.board[0][col] === this.board[1][col] &&
        this.board[0][col] === this.board[2][col] &&
        this.board[0][col] !== cuadroEnum.EMPTY
      ) {
        return true;
      }
    }
    //diagonal
    if(
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== cuadroEnum.EMPTY
    ){
      return true;
    }
    if(
      this.board[0][1] === this.board[1][1] &&
      this.board[0][1] === this.board[2][2] &&
      this.board[0][1] !== cuadroEnum.EMPTY
    ){
      return true;
    }

    if(
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][2] &&
      this.board[0][2] !== cuadroEnum.EMPTY
    ){
      return true;
    }
    return false;
  }

}
