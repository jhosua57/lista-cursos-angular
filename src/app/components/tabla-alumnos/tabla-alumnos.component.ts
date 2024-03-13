import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { alumnoModel } from 'src/app/models/alumnoModel';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  public alumnos?: alumnoModel[];

  ngOnInit(): void {
    this.alumnos = alumnos
  }

}
