/**
 * Interfaz Streamable video que contiene:
 * nombre
 * fecha de lanzamiento
 * director
 */
interface StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  getName(): string;
  getDate(): string;
  getDirector(): string;
}

/**
 * Clase para crear un objeto Streamable que implementa StreamableVideo
 */
export abstract class Streamable implements StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  /**
   * Constructor para la clase Streamable
   * @param name Nombre
   * @param date Fecha de lanzamiento
   * @param director Director
   */
  constructor(name: string, date: string, director: string) {
    this.name_ = name;
    this.date_ = date;
    this.director_ = director;
  }

  /**
   * getName
   * @returns el nombre del objeto
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns la fecha del objeto
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns el nombre del director
   */
  public getDirector(): string {
    return this.director_;
  }
}