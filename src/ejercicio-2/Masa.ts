import {isConvertible} from './isConvertible';

/**
 * Enum con las magnitudes disponibles
 */
export enum MasaUnit {
  Kg = 1,
  Libra = 2.205,
  Onza = 35.274
}

/**
 * Clase que representa la masa
 */
export class Masa implements isConvertible<MasaUnit> {
  static readonly unidad = MasaUnit;
  value: number;
  unit: MasaUnit;

  /**
   * Constructor para objeto Masa
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: MasaUnit) {
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
      case "Kg":
        resultado = this.value;
        sol = resultado + "Kg";
        break;
      case "Libra":
        resultado = this.value * MasaUnit.Libra;
        sol = resultado + "Libra";
        break;
      case "Onza":
        resultado = this.value * MasaUnit.Onza;
        sol = resultado + "Onzas";
        break;
    }
    return sol;
  }
}