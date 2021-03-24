/**
 * Interfaz para la conversión, con dos atributos, valor y unidad
 */
export interface isConvertible<T> {
  value: number;
  unit: T;
}