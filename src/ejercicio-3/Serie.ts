import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Serie extendida de Streamable
 */
export class Serie extends Streamable {
  genero: string;
  n_temporadas: number;

  /**
   * Constructor para el objeto Serie
   * @param name Nombre de la Serie
   * @param date Fecha de lanzamiento de la Serie
   * @param director Director de la Serie
   * @param genero Genero de la Serie
   * @param n_temporadas Numero de temporadas que tiene la Serie
   */
  constructor(name: string, date: string, director: string, genero: string, n_temporadas: number) {
    super(name, date, director);

    this.genero = genero;
    this.n_temporadas = n_temporadas;
  }

  /**
   * getName
   * @returns Nombre de la Serie
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento de la Serie
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director de la Serie
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns genero de la Serie
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * getNTemporadas
   * @returns Numero de temporadas de la Serie
   */
  public getNTemporadas(): number {
    return this.n_temporadas;
  }
}