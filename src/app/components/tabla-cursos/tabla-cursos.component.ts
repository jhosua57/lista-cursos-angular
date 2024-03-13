import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { cursoModel } from 'src/app/models/cursoModel';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {

  public cursos?: cursoModel[]

  ngOnInit(): void {
    this.cursos = cursos
  }

}
