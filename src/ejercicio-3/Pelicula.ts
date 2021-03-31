import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Peliculas extendida de Streamable
 */
export class Pelicula extends Streamable {
  genero: string;
  protagonista: string;

  /**
   * Constructor para el objeto Pelicula
   * @param name Nombre de la película
   * @param date Fecha de lanzamiento de la película
   * @param director Director de la película
   * @param genero Genero de la película
   * @param protagonista Protagonista de la película
   */
  constructor(name: string, date: string, director: string, genero: string, protagonista: string) {
    super(name, date, director);

    this.genero = genero;
    this.protagonista = protagonista;
  }

  /**
   * getName
   * @returns Nombre de la película
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento de la película
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director de la película
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns de la película
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * getProtagonista
   * @returns Nombre del protagonista de la película
   */
  public getProtagonista(): string {
    return this.protagonista;
  }
}