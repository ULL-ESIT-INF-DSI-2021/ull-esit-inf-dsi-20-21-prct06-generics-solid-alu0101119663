import {Streamable} from './Streamable';


interface IsStreamableCollection {
  coleccion_: Streamable[];
  
  busquedaNombre(name: string): number | StreamableCollection;
  busquedaFecha(date: string): number | StreamableCollection;
  busquedaDirector(director: string): number | StreamableCollection;

}

export class StreamableCollection implements IsStreamableCollection {
  coleccion_: Streamable[];

  constructor(collection: Streamable[]) {
    this.coleccion_ = collection;
  }

  public busquedaNombre(name: string): number | StreamableCollection {
    this.coleccion_.forEach((Element) => {
      if (Element.getName() === name) {
        return Element;
      } 
    });
    return -1;
  }

  public busquedaFecha(date: string): number | StreamableCollection {
    this.coleccion_.forEach((Element) => {
      if (Element.getName() === date) {
        return Element;
      }
    });
    return -1;
  }

  public busquedaDirector(director: string): StreamableCollection | number {
    this.coleccion_.forEach((Element) => {
      if (Element.getName() === director) {
        return Element;
      }
    });
    return -1;
  }
}