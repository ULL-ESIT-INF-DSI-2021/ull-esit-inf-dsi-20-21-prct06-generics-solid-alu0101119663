import {Fighter, atributos} from './Fighter';

/**
 * Clase para representar un personaje del universo Pokemon
 */
export class Pokemon extends Fighter {
  
  /**
   * Crea un objeto de tipo Pokemon
   * @param name Nombre
   * @param weight Peso
   * @param height Altura
   * @param phrase Frase durante el combate
   * @param attributes Atributos principales (ataque, defensa, velocidad y puntos de vida)
   * @param universe Universo al que pertenece
   */
  constructor(name: string, weight: number, height: number, private readonly typeOf: string, phrase: string, attributes: atributos, private readonly universe: string = "Pokemon") {
    super(name, weight, height, phrase, attributes);
  }

  /**
   * Responde a que tipo es el Pokemon
   * @returns Tipo de Pokemon
   */
  public getType(){
    return this.typeOf;
  }

  /**
   * Responde a que universo pertenece el objeto
   * @returns El universo
   */
  public getUniverse() {
    return this.universe;
  }
}