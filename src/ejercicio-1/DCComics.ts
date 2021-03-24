import {Fighter, atributos} from './Fighter';

/**
 * Clase para representar un personaje del universo DC Comics
 */
export class DCComics extends Fighter {
  
  /**
   * Crea un objeto de tipo DC Comics
   * @param name Nombre
   * @param weight Peso
   * @param height Altura
   * @param phrase Frase durante el combate
   * @param attributes Atributos principales (ataque, defensa, velocidad y puntos de vida)
   * @param universe Universo al que pertenece
   */
  constructor(name: string, weight: number, height: number, phrase: string, attributes: atributos, private readonly universe: string = "DC Comics") {
    super(name, weight, height, phrase, attributes);
  }

  /**
   * Responde a que universo pertenece el objeto
   * @returns El universo
   */
  public getUniverse() {
    return this.universe;
  }
}