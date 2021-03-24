/**
 * Crea la interfaz Effectible
 */
export interface Effectible<T> {    
    add(op1: T): number;
    substract(op1: T): number;
    multiply(op1: T): number;
    divide(op1: T): number;
}

/**
 * Crea la clase EffectibleCollection extendida desde la interfaz Effectible
 */
export class EffectibleCollection<T extends Effectible<T>> {
    constructor(private elements: T[]) { }

    addEffectible(elemento: T){
        this.elements.push(elemento);
    }

    getEffectible(index: number) {
        return this.elements[index];
    }

    getNumberOfEffectibles(){
        return this.elements.length;
    }
}

/**
 * Clase Racional
 */
class Racional implements Effectible<Racional> {
    constructor(private op: number) { }

    add(op1: Racional) { }
    substract(op1: Racional) { }
    multiply(op1: Racional) { }
    divide(op1: T) { }
}