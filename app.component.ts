import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val1!: number;
  val2!: number;
  rta!: number;
  rts!: number;
 
  operacion() {


    this.rta = this.val1 + this.val2;
  }
  operacionresta() {

    if (this.val1 >= this.val2) {


      this.rta = this.val1 - this.val2;

    } else {
     alert('el valor 1 tiene que ser mayor')

    }

      

    
  }
  operacionmultiplicar(){


    this.rta = this.val1 * this.val2;
  }
  operaciondidivision(){

    this.rta = this.val1 / this.val2;


  }

  }




