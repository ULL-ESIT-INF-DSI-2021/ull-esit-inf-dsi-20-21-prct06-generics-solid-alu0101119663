/**
 * Atributos principales que deben tener todos los personajes
 */
export type atributos = {
  attack: number;
  defense: number;
  speed: number;
  health: number;
}

/**
 * Clase abstracta que representa un personaje
 */
export abstract class Fighter {
  
  /**
   * Crea un objeto personaje
   * @param name Nombre
   * @param weight Peso
   * @param height Altura
   * @param phrase Frase de combate
   * @param attributes Atributos principales (ataque, defensa, velocidad y salud máxima)
   */
  constructor(private readonly name: string, private readonly weight: number, private readonly height: number, private readonly phrase: string, private readonly attributes: atributos) { }

  /**
   * getName
   * @returns Nombre del personaje
   */
  getName() {
    return this.name;
  }

  /**
   * getWeight
   * @returns Peso del personaje
   */
  getWeight() {
    return this.weight;
  }

  /**
   * getHeight
   * @returns Altura del personaje
   */
  getHeight() {
    return this.height;
  }

  /**
   * getPhrase
   * @returns Frase de combate del personaje
   */
  getPhrase() {
    return this.phrase;
  }

  /**
   * getAttributes
   * @returns Principales atributos del personaje
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * Funcion para obtener a que universo pertece el personaje
   */
  abstract getUniverse(): string;
}