import { Component, OnInit } from '@angular/core';
import { Persona } from '../Clases/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona;

  constructor() { }

  ngOnInit() {
  }


  Mostrar() {
    console.log('Entro a mostrar');
    this.persona = new Persona('Pol', 'PPP', 'Alumno', 10);

  }

}
