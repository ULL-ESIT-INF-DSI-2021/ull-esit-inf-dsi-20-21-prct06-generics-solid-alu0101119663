import {isConvertible} from './isConvertible';

/**
 * Enum con las magnitudes disponibles
 */
export enum TiempoUnit {
  Min = 1,
  Horas = 60,
  Seg = 60,
}

/**
 * Clase que representa el tiempo
 */
export class Tiempo implements isConvertible<TiempoUnit> {
  static readonly unidad = TiempoUnit;
  value: number;
  unit: TiempoUnit;

  /**
   * Constructor para objeto Tiempo
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: TiempoUnit) {
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
      case "Min":
        resultado = this.value;
        sol = resultado + "Min";
        break;
      case "Horas":
        resultado = this.value / TiempoUnit.Horas;
        sol = resultado + "Horas";
        break;
      case "Seg":
        resultado = this.value * TiempoUnit.Seg;
        sol = resultado + "Seg";
        break;    
    }
    return sol;
  }
}