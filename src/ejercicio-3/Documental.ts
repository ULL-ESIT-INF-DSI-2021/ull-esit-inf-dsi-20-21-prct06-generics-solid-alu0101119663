import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Documental extendida de Streamable
 */
export class Documental extends Streamable {
  genero: string;

  /**
   * Constructor para el objeto Documental
   * @param name Nombre del Documental
   * @param date Fecha de lanzamiento del Documental
   * @param director Director del Documental
   * @param genero Genero del Documental
   */
  constructor(name: string, date: string, director: string, genero: string) {
    super(name, date, director);

    this.genero = genero;
  }

  /**
   * getName
   * @returns Nombre del Documental
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento del Documental
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director del Documental
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns genero del Documental
   */
  public getGenero(): string {
    return this.genero;
  }
}