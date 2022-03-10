import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  mostrar = false;
  show = 'Mostrar'; 
  handlerChange(){
    this.mostrar = !this.mostrar;
    this.mostrar ? this.show = 'Ocultar' : this.show = 'Mostrar';
  }
  fNum:number | null = null;
  sNum:number | null = null;
  result:number | string | null = null;
  historial:Array<String> = [];
  sumar() {
    if(this.fNum == null || this.sNum == null) {this.result = 'Error'; return;}
    this.result = this.fNum + this.sNum;
    this.setHistorial('+');
  }
  restar() {
    if(this.fNum == null || this.sNum == null) {this.result = 'Error'; return;}
    this.result = this.fNum - this.sNum;
    this.setHistorial('-');
  }
  multiplicar() {
    if(this.fNum == null || this.sNum == null) {this.result = 'Error'; return;}
    this.result = this.fNum * this.sNum;
    this.setHistorial('*');
  }
  dividir() {
    if(this.fNum == null || this.sNum == null) {this.result = 'Error'; return;}
    this.result = this.fNum / this.sNum;
    this.setHistorial('/');
  }
  pasarABinario() {
    if(this.fNum == null || this.sNum == null) {this.result = 'Error'; return;} 
    this.result = this.fNum.toString(2);
    this.sNum = null;
    this.setHistorial('Binario');
  }
  clean() {
    this.fNum = null;
    this.sNum = null;
    this.result = null;
    this.historial = [];
  }
  setHistorial(metodo:string) {
    if(metodo == "Binario") {
      this.historial.push(
        `${this.fNum} en binario resulta ${this.result}`	
      );}
      else{
    this.historial.push(
      `${this.fNum} ${metodo} ${this.sNum} = ${this.result}`	
    );
  }
  }
}
