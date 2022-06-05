import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from 'src/app/services/instrumentos.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css'],
})
export class DetalleInstrumentoComponent implements OnInit {
  instrumento: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private instrumentService: InstrumentosService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.instrumento = this.instrumentService.getInstrumento(params['id']);
    });
  }

  ngOnInit(): void {}
}
