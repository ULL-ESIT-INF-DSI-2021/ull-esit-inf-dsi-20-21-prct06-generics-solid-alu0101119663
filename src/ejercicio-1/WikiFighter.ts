import {Fighter} from './Fighter';

/**
 * Clase que representa una Base de Datos sobre los personajes
 */
export class WikiFighter {
  constructor(public FightersBD: Fighter[]) { }

  /**
   * getBD
   * @returns Devuelve la base de datos crada
   */
  public getBD(){
    return this.FightersBD;
  }

  /**
   * Muestra el contenido de la Base de Datos (WikiFighter)
   */
  public showBD() {
    console.log(this.FightersBD);
  }
}