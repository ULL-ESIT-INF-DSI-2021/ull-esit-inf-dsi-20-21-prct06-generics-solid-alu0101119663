import {isConvertible} from './isConvertible';

/**
 * Enum con las magnitudes disponibles
 */
export enum VelocidadUnit {
  Kmh = 1,
  Mph = 1.609,
  Ms = 3.6
}

/**
 * Clase que representa la velocidad
 */
export class Velocidad implements isConvertible<VelocidadUnit> {
  static readonly unidad = VelocidadUnit;
  value: number;
  unit: VelocidadUnit;

  /**
   * Constructor para objeto Velocidad
   * @param value_ Valor
   * @param unit_ Unidad
   */
  constructor(value_: number, unit_: VelocidadUnit) {
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
      case "Kmh":
        resultado = this.value;
        sol = resultado + "Kmh";
        break;
      case "Mph":
        resultado = this.value / VelocidadUnit.Mph;
        sol = resultado + "Mph";
        break;
      case "Ms":
        resultado = this.value / VelocidadUnit.Ms;
        sol = resultado + "Ms";
        break;
    }
    return sol;
  }
}