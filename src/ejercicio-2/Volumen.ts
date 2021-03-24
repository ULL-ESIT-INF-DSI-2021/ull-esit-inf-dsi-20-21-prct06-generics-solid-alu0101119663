import {isConvertible} from './isConvertible';

/**
 * Enum con las magnitudes disponibles
 */
export enum VolumenUnit {
  Litro = 1,
  Galon = 4.546,
  MetroCubito = 0.001,
  Cuarto = 1.137
}

/**
 * Clase que representa el Volumen
 */
export class Volumen implements isConvertible<VolumenUnit> {
  static readonly unidad = VolumenUnit;
  value: number;
  unit: VolumenUnit;

  /**
   * Constructor para objeto Volumen
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: VolumenUnit) {
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
      case "Litro":
        resultado = this.value;
        sol = resultado + "Litro";
        break;
      case "Galon":
        resultado = this.value / VolumenUnit.Galon;
        sol = resultado + "Galon";
        break;
      case "MetroCubito":
        resultado = this.value / VolumenUnit.MetroCubito;
        sol = resultado + "MetroCubito";
        break;
      case "Yarda":
        resultado = this.value / VolumenUnit.Cuarto;
        sol = resultado + "Cuarto";
        break;      
    }
    return sol;
  }
}