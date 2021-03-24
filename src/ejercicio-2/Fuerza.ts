import {isConvertible} from './isConvertible';

/**
 * Enum con las fuerzas disponibles
 */
export enum FuerzaUnit {
  Newton = 1,
  Kilopondio = 9.807,
}

/**
 * Clase que representa la fuerza
 */
export class Fuerza implements isConvertible<FuerzaUnit> {
  static readonly unidad = FuerzaUnit;
  value: number;
  unit: FuerzaUnit;

  /**
   * Constructor para objeto Fuerza
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: FuerzaUnit) {
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
      case "Newton":
        resultado = this.value;
        sol = resultado + "Newton";
        break;
      case "Kilopondio":
        resultado = this.value / FuerzaUnit.Kilopondio;
        sol = resultado + "Kilopondio";
        break;    
    }
    return sol;
  }
}