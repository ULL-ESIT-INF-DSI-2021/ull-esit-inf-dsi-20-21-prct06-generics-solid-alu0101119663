# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

## Introducción
Durante la realización de esta práctica lo que haremos es seguir familiarizarnos con la realización de ejercicios en código **TypeScript**, centrado en los **Objetos, clases e interfaces** en este lenguaje bajo los **Principios Solid**. Para empezar crearemos una estructura para nuestro proyecto y luego empezaremos a codificar los ejercicios que nos han propuesto.

## Antes de empezar.
Antes de empezar, hemos de crear la estructura. Para ello nos haremos los mismos pasos que llevamos haciendo durante el transcurso del tiempo, en bibliografía estarán los enlaces que hemos estado siguiendo.

## Lista de ejercicios.
- Ejercicio 1 - El combate definitivo
- Ejercicio 2 - Conversor de unidades
- Ejercicio 3 - DSIflix

## Ejercicio 1 - El combate definitivo
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/tree/master/src/ejercicio-1)

[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/blob/master/tests/ejercicio-1.spec.ts)

### Clase Fighter
```
export type atributos = {
  attack: number;
  defense: number;
  speed: number;
  health: number;
}

export abstract class Fighter {
  
  constructor(private readonly name: string, private readonly weight: number, private readonly height: number, private readonly phrase: string, private readonly attributes: atributos) { }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  getHeight() {
    return this.height;
  }

  getPhrase() {
    return this.phrase;
  }

  getAttributes() {
    return this.attributes;
  }

  abstract getUniverse(): string;
}
```
Para la realización de la clase **Fighter** hemos partido a partir de la **Clase Pokemon** de la práctica anterior (si hace click [aquí](https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/) podrá verla). Tenemos un *type* con los atributos principales **ataque, defensa, velocidad y salud**. Creamos una clase abstracta que será la base para la clase de cada luchador que crearemos después. En el constructor de esta clase se le pasan como parametros: nombre, peso, altura, frase característica y los atributos, que es el *type* que mencionamos anteriormente. Tras el constructor tenemos los *getters y setter* correspondientes. Por últimos tenemos una última función *abstract* que nos servirá para obtener a que universo pertenece cada personaje.

### Clase Pokemon
```
import {Fighter, atributos} from './Fighter';

export class Pokemon extends Fighter {
  
  constructor(name: string, weight: number, height: number, private readonly typeOf: string, phrase: string, attributes: atributos, private readonly universe: string = "Pokemon") {
    super(name, weight, height, phrase, attributes);
  }

  public getType(){
    return this.typeOf;
  }

  public getUniverse() {
    return this.universe;
  }
}
```
Para la realización de la clase **Pokemon** partimos de la clase *abstracta* **Fighter**. Como todas las clases de los universos son prácticamente iguales comentaré lo que hace esta. Para la realización se crea una clase extendida de **Fighter**. Con los parámetros que mencionamos antes (nombre, peso, altura, frase característica y los atributos) tenemos el constructor de la clase pero con una pequeña particularidad, también he añadido en esta clase qué tipo de **Pokemon** es el luchador que estamos creando, este parámetros las otras clases no lo tendrán ya que no son Pokemons. Tras el constructor tenemos el *getter* del tipo de Pokemon y por úlitmo la función que nos devolverá a que universo pertenece, es decir otro *get*.

### Clase WikiFighter
```
import {Fighter} from './Fighter';

export class WikiFighter {
  constructor(public FightersBD: Fighter[]) { }

  public getBD(){
    return this.FightersBD;
  }

  public showBD() {
    console.log(this.FightersBD);
  }
}
```
En esta clase crearemos una pequeña base de datos donde almacenará toda la información de cada luchador que creemos. En el constructor pasamos como parámentro un *array de Fighters*. Y por úlitmo, tenemos el *getter* y una función para que imprima por pantalla el contenido de la base de datos, la función llamada *showBD*.

### Clase Combat
```
import {Fighter} from './Fighter';

export class Combat {
  
  constructor(public Personaje1: Fighter, public Personaje2: Fighter) { }

  public calculateDemage(Personaje1: Fighter, Personaje2: Fighter) {
    let effectivess: number = 0; 

    const universeP1: string = Personaje1.getUniverse();
    const universeP2: string = Personaje2.getUniverse();
    if (universeP1 == universeP2) {
      effectivess = 1;
    }

    switch(universeP1) {
      case 'DC Comics':
        switch(universeP2) {
          case 'Dragon Ball': effectivess = 1.5; break;
          case 'Marvel': effectivess = 1; break;
          case 'Pokemon': effectivess = 0.5; break;
          case 'Star Wars': effectivess = 2; break;
          }
        break;
      case 'Dragon Ball':
        switch(universeP2) {
          case 'DC Comics': effectivess = 1; break;
          case 'Marvel': effectivess = 0.5; break;
          case 'Pokemon': effectivess = 2; break;
          case 'Star Wars': effectivess = 1.5; break;
          }
        break;
      case 'Marvel':
        switch(universeP2) {
          case 'DC Comics': effectivess = 1.5; break;
          case 'Dragon Ball': effectivess = 2; break;
          case 'Pokemon': effectivess = 1; break;
          case 'Star Wars': effectivess = 0.5; break;
          }
        break;  
      case 'Pokemon':
        switch(universeP2) {
          case 'DC Comics': effectivess = 2; break;
          case 'Dragon Ball': effectivess = 0.5; break;
          case 'Marvel': effectivess = 1.5; break;
          case 'Star Wars': effectivess = 1; break;
          }
        break;
      case 'Star Wars':
        switch(universeP2) {
          case 'DC Comics': effectivess = 0.5; break;
          case 'Dragon Ball': effectivess = 1; break;
          case 'Marvel': effectivess = 2; break;
          case 'Star Wars': effectivess = 1.5; break;
          }
        break;
    }

    let demage = (50 * (Personaje1.getAttributes().attack / Personaje2.getAttributes().defense) * effectivess);
    return Math.trunc(demage);
  }

  public simulateCombat(){
    let healthP1 = this.Personaje1.getAttributes().health;
    let healthP2 = this.Personaje2.getAttributes().health;

    console.log(`Se van a enfrentar: ${this.Personaje1.getName()} (${this.Personaje1.getUniverse()}) Vs. ${this.Personaje2.getName()} (${this.Personaje2.getUniverse()})`);
    while (healthP1 > 0 && healthP2 > 0) {
      console.log(`${this.Personaje1.getPhrase()}!!!`);
      healthP2 -= this.calculateDemage(this.Personaje1, this.Personaje2);

      if (healthP2 > 0) {
      console.log(`${this.Personaje2.getPhrase()}!!!`);
      healthP1 -= this.calculateDemage(this.Personaje2, this.Personaje1);
      }
    }
  
    let result: string = 'El ganador es: '
    if (healthP1 <= 0) {
      result += `${this.Personaje2.getName()}`;
    } else {
      result += `${this.Personaje1.getName()}`;
    }
    return result;
  }
}
```
Para la realización de la clase **Combat** nos apoyamos en dos funciones y en el constructor. Este último recibe como parámetros los dos luchadores que se enfrentarán. La función siguiente es *calculateDemage*, esta función recibe como parámetros a los dos luchadores y su propósito es calcular la efectividad del golpe y en función a la efectivadad calcula el valor que se le restará a la vida del luchador que reciba dicho golpe, es decir, calculará el daño. Para calcular el daño creamos la variable donde almacenaremos la efectividad, es ello creamos dos variables donde guardamos de que universo viene cada luchador para luego comparar si es el mismo o si son diferentes. Si es el mismo la efectividad será 1, sin embargo si pertenecen a diferentes universos se evaluará la efectividad dentro de un *switch*, donde en función del universo del primer luchador entrará a otro segundo *switch* para encontrar la efectividad contra el luchador 2. Estas estadísticas de efectividad son inventadas por mi de forma aleatoria. Tras cumplir con los dos *switches* y tener el valor de la efectividad creamos una variable *demage*, que usa la función matemática que se nos ha dado en prácticas anteriores para calcular el daño que realiza el golpe. Por último se devuelve esta última varible haciendo un truncamiento para realizar la resta en la vida del luchador que recibe el golpe de una forma mas cómoda. En la última función simularemos el combate entre luchadores para ello en las dos primeras lineas establecemos en dos variables la salud inicial de los oponentes. Imprimimos por consola quienes son los que se van a enfrentar y de qué universo son. Tras hacer las presentación entramos en un bucle *while* la condición para que este while se ejecute es que la vida de ambos sea mayor que 0. Dentro de este bucle se realizarán los golpes. Empezará el luchador 1, dirá su frase característica antes del golpe y se le restará en la vida el valor del daño que le realiza al oponente. Tras hacer la resta se comprueba que el oponentes, es decir, el segundo luchador aún tenga la vida por encima de 0, si lo es dará el golpe el al primer luchador diciendo también su frase característica. Una vez un luchador se quede sin vida, se imprime por pantalla el nombre del ganador y se devuelve la cadena de texto: *El ganador es: (nombre del personaje)*.


## Ejercicio 2 - Conversor de unidades
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/tree/master/src/ejercicio-2)

[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/blob/master/tests/ejercicio-2.spec.ts)

### isConverible
```
export interface isConvertible<T> {
  value: number;
  unit: T;
}
```
En este fichero creamos una interfaz con el valor que va a tener la magnitud y la unidad que lo representará.

### Temperatura
```
import {isConvertible} from './isConvertible';

export enum TemperaturaUnit {
  C = 1,
  K = 273.15,
  F = 32,
}

export class Temperatura implements isConvertible<TemperaturaUnit> {
  static readonly unidad = TemperaturaUnit;
  value: number;
  unit: TemperaturaUnit;

  constructor(value_: number, unit_: TemperaturaUnit) {
    this.value = value_;
    this.unit = unit_;
  }

  public convertidor(nueva_unidad: string): string {
    let resultado: number;
    let sol: string = '';
    switch(nueva_unidad){
      case "C":
        resultado = this.value;
        sol = resultado + "C";
        break;
      case "K":
        resultado = this.value + TemperaturaUnit.K;
        sol = resultado + "K";
        break;
      case "F":
        resultado = (this.value * 9/5) + TemperaturaUnit.F;
        sol = resultado + "F";
        break;    
    }
    return sol;
  }
}
```
Al ser diferentes magnitudes que utlizarán estas interfaces, serán muy parecidas. Por lo tanto sólo comentaré una. Para crear la clase temparatura, primero he creado un *enum* para tener los valores correspondientes para pasar de una magnitud a otra. Tras esto, creamos la clase **Temperatura** que implementa la interfaz creada con el tipo de datos *TemperaturaUnit*, con los atributos para la unidad y el valor numérico que tendrá. Estos serán los parámetros que le pasaremos al constructor. Por último mencionar la función o método mas importante que es la llamada **convertidor**. Esta recibe por parámetro la nueva unidad, se crean las variables *resultado* y *sol*. Tras esto tenemos un *switch* que según la nueva unidad que introduzcamos pues calculará el resultado y los guardará en la variable *resultado* y una vez calculado este valor númerico se concatena la unidad, en la variable *sol*, y se devuleve la cadena que contiene el valor númerico con la unidad nueva que se ha introducido por parámetro.

## Ejercicio 3 - DSIflix
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/tree/master/src/ejercicio-3)

[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101119663/blob/master/tests/ejercicio-3.spec.ts)

### Streamable
```
interface StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  getName(): string;
  getDate(): string;
  getDirector(): string;
}

export abstract class Streamable implements StreamableVideo {
  name_: string;
  date_: string;
  director_: string;

  constructor(name: string, date: string, director: string) {
    this.name_ = name;
    this.date_ = date;
    this.director_ = director;
  }

  public getName(): string {
    return this.name_;
  }

  public getDate(): string {
    return this.date_;
  }

  public getDirector(): string {
    return this.director_;
  }
}
```
Para empezar se crea una interfaz **StreamableVideo**, la cual define el nombre, fecha y director, junto a sus respectivos *getter*. Tras la creación de esta interfaz, crearemos la clase Streamable, a cuyo constructor se le pasan los parámetros de nombre, fecha y director. En esta clase también tendremos los correspondientes *getters*

### Pelicula
```
import {Streamable} from './Streamable';

export class Pelicula extends Streamable {
  genero: string;
  protagonista: string;
  
  constructor(name: string, date: string, director: string, genero: string, protagonista: string) {
    super(name, date, director);

    this.genero = genero;
    this.protagonista = protagonista;
  }

  public getName(): string {
    return this.name_;
  }

  public getDate(): string {
    return this.date_;
  }

  public getDirector(): string {
    return this.director_;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getProtagonista(): string {
    return this.protagonista;
  }
}
```
Con la ayuda de la clase abstracta anterior, hemos creado tres clases que se corresponden con **Pelicula**, **Serie** y **Documental**. Todas ellas son muy parecidad, por tanto al explicar una se repite el proceso para las otras dos. Pongamos el ejemplo de la clase película. Se crea la clase con un *extends* de Streamable y se le añaden dos atributos más, el **género** de la película y el **protagonista** de la misma. Se crea el constructor con los atributos de la clase abstracta (nombre, fecha y director) junto a estos dos últimos que se han mencionado. Con *super* indicamos que estos parámetros son heredados de la clase abstracta y a *genero* como a *protagonista* lo actualizamos con los parámetros del constructor. Tras terminar el constructor tenemos los *getters* correspondientes.

### BasicStreamableCollection
```
import {Streamable} from './Streamable';

interface IsStreamableCollection {
  coleccion_: Streamable[];
  
  busquedaNombre(nombre: string): undefined | Streamable;
  busquedaFecha(fecha: string): undefined | Streamable;
  busquedaDirector(director: string): undefined | Streamable;

}

export class StreamableCollection implements IsStreamableCollection {
  coleccion_: Streamable[];

  constructor(collection: Streamable[]) {
    this.coleccion_ = collection;
  }

  public busquedaNombre(nombre: string): Streamable | undefined {
    return this.coleccion_.find((evidence) => evidence.getName() === nombre);
  }

  public busquedaFecha(fecha: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDate() === fecha);
  }

  public busquedaDirector(director: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDirector() === director);
  }
}
```
Por último se ha creado la interfaz **IsStreamableCollection** que lo que hará es crear un array con cualquier tipo de clase que sea de tipo Streamable, como por ejemplo las creadas anteriormente: *serie*, *pelicula*, *documental*. En esta misma interfaz también se definen los métodos de búsqueda ya sea por **fecha**, **nombre** o **director**. Una vez terminada la interfaz, se crea la clase *StreamableCollection* que implementa la interfaz anteriormente descrita para almacenar los objetos *Streamables* y realizar sus búsquedas pertinentes.

## Conclusión
Durante la realización de esta práctica he aprendido la importancia de utilizar interfaces genéricas ya que son herramientas que nos pueden ayudar mucho en futuros desarrollos. He de mencionar que al principio me ha  costado entender un poco su funcionamiento pero con trabajo creo que las tendré presentes en futuros trabajo ya que pueden hacer que se cumplan restricciones predefinidas. En cuanto a las clases genéricas, me ha sido mas simple entenderlas ya que tengo pequeñas nociones de como funcionaban pero esta práctica ha ayudado a seguir comprendidolas y a obtener experiencia con su desarrollo.


