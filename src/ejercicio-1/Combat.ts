import {Fighter} from './Fighter';

/**
 * Clase que representa la simulacion de un combate
 */
export class Combat {
  
  /**
   * Constructor que permite crear un combate entre dos personajes
   * @param Personaje1 Primer luchador
   * @param Personaje2 Segundo luchador
   */
  constructor(public Personaje1: Fighter, public Personaje2: Fighter) { }

  /**
   * Función que calculará el daño correspondiente a cada ataque
   * @param Personaje1 Primer luchador
   * @param Personaje2 Segundo luchador
   * @returns Daño causado
   */
  public calculateDemage(Personaje1: Fighter, Personaje2: Fighter) {
    let effectivess: number = 0; 

    const universeP1: string = Personaje1.getUniverse();
    const universeP2: string = Personaje2.getUniverse();
    if (universeP1 == universeP2) {
      effectivess = 1;
    }

    switch(universeP1) {
      case 'DC Comics':
        switch(universeP2) {
          case 'Dragon Ball': effectivess = 1.5; break;
          case 'Marvel': effectivess = 1; break;
          case 'Pokemon': effectivess = 0.5; break;
          case 'Star Wars': effectivess = 2; break;
          }
        break;
      case 'Dragon Ball':
        switch(universeP2) {
          case 'DC Comics': effectivess = 1; break;
          case 'Marvel': effectivess = 0.5; break;
          case 'Pokemon': effectivess = 2; break;
          case 'Star Wars': effectivess = 1.5; break;
          }
        break;
      case 'Marvel':
        switch(universeP2) {
          case 'DC Comics': effectivess = 1.5; break;
          case 'Dragon Ball': effectivess = 2; break;
          case 'Pokemon': effectivess = 1; break;
          case 'Star Wars': effectivess = 0.5; break;
          }
        break;  
      case 'Pokemon':
        switch(universeP2) {
          case 'DC Comics': effectivess = 2; break;
          case 'Dragon Ball': effectivess = 0.5; break;
          case 'Marvel': effectivess = 1.5; break;
          case 'Star Wars': effectivess = 1; break;
          }
        break;
      case 'Star Wars':
        switch(universeP2) {
          case 'DC Comics': effectivess = 0.5; break;
          case 'Dragon Ball': effectivess = 1; break;
          case 'Marvel': effectivess = 2; break;
          case 'Star Wars': effectivess = 1.5; break;
          }
        break;
    }

    let demage = (50 * (Personaje1.getAttributes().attack / Personaje2.getAttributes().defense) * effectivess);
    return Math.trunc(demage);
  }

  /**
   * Permite realizar la simulación de un enfrentamiento entre los contendientes
   * @returns quien es el ganador
   */
  public simulateCombat(){
    let healthP1 = this.Personaje1.getAttributes().health;
    let healthP2 = this.Personaje2.getAttributes().health;

    console.log(`Se van a enfrentar: ${this.Personaje1.getName()} (${this.Personaje1.getUniverse()}) Vs. ${this.Personaje2.getName()} (${this.Personaje2.getUniverse()})`);
    while (healthP1 > 0 && healthP2 > 0) {
      console.log(`${this.Personaje1.getPhrase()}!!!`);
      healthP2 -= this.calculateDemage(this.Personaje1, this.Personaje2);

      if (healthP2 > 0) {
      console.log(`${this.Personaje2.getPhrase()}!!!`);
      healthP1 -= this.calculateDemage(this.Personaje2, this.Personaje1);
      }
    }
  
    let result: string = 'El ganador es: '
    if (healthP1 <= 0) {
      result += `${this.Personaje2.getName()}`;
    } else {
      result += `${this.Personaje1.getName()}`;
    }
    return result;
  }
}