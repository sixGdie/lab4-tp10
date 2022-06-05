import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/instrumentos.json';
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css'],
})
export class InstrumentosComponent implements OnInit {
  instrumentos: any[] = [];

  constructor(
    private instrumentsService: InstrumentosService,
    private router: Router
  ) {
    this.instrumentos = this.instrumentsService.getInstrumentos();
  }

  ngOnInit(): void {}

  handleClick(id: string) {
    this.router.navigate(['/instrumentos', id]);
  }
}
