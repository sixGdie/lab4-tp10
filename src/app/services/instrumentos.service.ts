import { Injectable } from '@angular/core';
import * as data from '../../assets/data/instrumentos.json';

@Injectable({
  providedIn: 'root',
})
export class InstrumentosService {
  instrumentos: any = (data as any).default;

  constructor() {}

  public getInstrumentos(): any[] {
    return this.instrumentos.instrumentos;
    console.log(this.instrumentos.instrumentos);
  }

  getInstrumento(id: string) {
    return this.instrumentos.instrumentos.find(
      (instrumento: any) => instrumento.id === id
    );
  }

  searchInstrumentos(term: string) {
    const instrumentos = this.instrumentos.instrumentos;
    const result = instrumentos.filter((instrumento: any) => {
      return instrumento.nombre.toLowerCase().includes(term.toLowerCase());
    });
    return result;
  }
}
