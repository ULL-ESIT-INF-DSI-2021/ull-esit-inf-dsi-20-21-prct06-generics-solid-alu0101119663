import {Streamable} from './Streamable';

/**
 * Interfaz que contiene un array para la collecion y los metodos de busquedas
 */
interface IsStreamableCollection {
  coleccion_: Streamable[];
  
  busquedaNombre(nombre: string): undefined | Streamable;
  busquedaFecha(fecha: string): undefined | Streamable;
  busquedaDirector(director: string): undefined | Streamable;

}

/**
 * Clase que crea el objeto StreamableCollection
 */
export class StreamableCollection implements IsStreamableCollection {
  coleccion_: Streamable[];

  /**
   * Constructor de la clase StreamableCollection
   * @param collection Array donde se irán almacenando los objetos creados
   */
  constructor(collection: Streamable[]) {
    this.coleccion_ = collection;
  }

  /**
   * Realiza la busqueda por nombre
   * @param nombre Nombre del objeto
   * @returns Devuelve el objeto que concuerda con el nombre proporcionado
   */
  public busquedaNombre(nombre: string): Streamable | undefined {
    return this.coleccion_.find((evidence) => evidence.getName() === nombre);
  }

  /**
   * Realiza la busqueda por fecha
   * @param fecha 
   * @returns Devuelve el objeto que concuerda con la fecha proporcionada
   */
  public busquedaFecha(fecha: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDate() === fecha);
  }

  /**
   * Realiza la busqueda por nombre de director
   * @param director 
   * @returns Devuelve el objeto que concuerda con el nombre del director
   */
  public busquedaDirector(director: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDirector() === director);
  }
}