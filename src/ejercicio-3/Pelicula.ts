import {Streamable} from './Streamable';

export class Pelicula extends Streamable {
  genero: string;
  protagonista: string;

  constructor(name: string, date: string, director: string, genero: string, protagonista: string) {
    super(name, date, director);

    this.genero = genero;
    this.protagonista = protagonista;
  }

  public getName(): string {
    return this.name_;
  }

  public getDate(): string {
    return this.date_;
  }

  public getDirector(): string {
    return this.director_;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getProtagonista(): string {
    return this.protagonista;
  }
}