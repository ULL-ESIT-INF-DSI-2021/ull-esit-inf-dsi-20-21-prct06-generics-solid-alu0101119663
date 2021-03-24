import {isConvertible} from './isConvertible';
/**
 * Enum con las magnitudes disponibles
 */
export enum LongitudUnit {
  Metro = 1,
  Pie = 3.281,
  Pulgada = 39.37,
  Yarda = 1.094
}

/**
 * Clase que representara la longitud
 */
export class Longitud implements isConvertible<LongitudUnit> {
  static readonly unidad = LongitudUnit;
  value: number;
  unit: LongitudUnit;

  /**
   * Constructor para objeto Longitud
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: LongitudUnit) {
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
      case "Metro":
        resultado = this.value;
        sol = resultado + "Metro";
        break;
      case "Pie":
        resultado = this.value * LongitudUnit.Pie;
        sol = resultado + "Pie";
        break;
      case "Pulgada":
        resultado = this.value * LongitudUnit.Pulgada;
        sol = resultado + "Pulgada";
        break;
      case "Yarda":
        resultado = this.value * LongitudUnit.Yarda;
        sol = resultado + "Yarda";
        break;      
    }
    return sol;
  }
}