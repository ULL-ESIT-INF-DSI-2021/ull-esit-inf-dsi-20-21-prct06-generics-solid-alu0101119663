import {isConvertible} from './isConvertible';

/**
 * Enum con las magnitudes disponibles
 */
export enum TemperaturaUnit {
  C = 1,
  K = 273.15,
  F = 32,
}

/**
 * Clase que representa la temperatura
 */
export class Temperatura implements isConvertible<TemperaturaUnit> {
  static readonly unidad = TemperaturaUnit;
  value: number;
  unit: TemperaturaUnit;

  /**
   * Constructor para objeto Temperatura
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: TemperaturaUnit) {
    this.value = value_;
    this.unit = unit_;
  }

  /**
   * Convertidor entre magnitudes
   * @param nueva_unidad Nueva unidad a la que se convertira
   * @returns El valor concatenado con su magnitud
   */
  public convertidor(nueva_unidad: string): string {
    let resultado: number;
    let sol: string = '';
    switch(nueva_unidad){
      case "C":
        resultado = this.value;
        sol = resultado + "C";
        break;
      case "K":
        resultado = this.value + TemperaturaUnit.K;
        sol = resultado + "K";
        break;
      case "F":
        resultado = (this.value * 9/5) + TemperaturaUnit.F;
        sol = resultado + "F";
        break;    
    }
    return sol;
  }
}