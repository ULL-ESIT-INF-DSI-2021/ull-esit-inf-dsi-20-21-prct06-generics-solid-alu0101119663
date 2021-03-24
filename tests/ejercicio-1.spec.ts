import 'mocha';
import {expect} from 'chai'
import {Combat} from '../src/ejercicio-1/Combat';
import {DCComics} from '../src/ejercicio-1/DCComics';
import {DragonBall} from '../src/ejercicio-1/DragonBall';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {StarWars} from '../src/ejercicio-1/StarWars';
import {WikiFighter} from '../src/ejercicio-1/WikiFighter';

let Batman = new DCComics("Batman", 95, 188, "Bat-golpe", {attack: 51, defense: 53, speed: 74, health: 326});
let Goku = new DragonBall("Goku", 62, 175, "Kamehameha", {attack: 47, defense: 49, speed: 76, health: 333});
let SpiderMan = new Marvel("Spider-Man", 76, 178, "(sonido telaraña)", {attack: 49, defense: 45, speed: 99, health: 315});
let Pikachu = new Pokemon("Pikachu", 6.0, 0.4, "electrico", "Pikachuuuuuu", {attack: 55, defense: 40, speed: 90, health: 320});
let DarthVader = new StarWars("Darh Vader", 118, 201, "Yo soy tu padre", {attack: 30, defense: 66, speed: 59, health: 335});

let Wiki1 = new WikiFighter([Batman, Goku, SpiderMan, Pikachu, DarthVader]);

let Combate1 = new Combat(Pikachu, SpiderMan);

describe('Ejercicio 1 - El combate definitivo', () => {
  it('Batman.getName() return Batman', () => {  
    expect(Batman.getName()).to.be.deep.equal("Batman");
  });

  it('Goku.getHeight() return 175', () => {  
    expect(Goku.getHeight()).to.be.deep.equal(175);
  });

  it('SpiderMan.getPhrase() return (sonido telaraña)', () => {  
    expect(SpiderMan.getPhrase()).to.be.deep.equal("(sonido telaraña)");
  });  

  it('Pikachu.getAttributes() return 55', () => {  
    expect(Pikachu.getAttributes().attack).to.be.deep.equal(55);
  });  

  it('Pikachu.getType() return electrico', () => {  
    expect(Pikachu.getType()).to.be.deep.equal("electrico");
  });

  it('DarthVader.getUniverse() return Star Wars', () => {  
    expect(DarthVader.getUniverse()).to.be.deep.equal("Star Wars");
  });

  it('Creación del objeto WikiFighter != null', () =>{
    expect(Wiki1.getBD()).not.to.be.equal(null);
  });

  it('Contenido de Wiki1', () => {
    Wiki1.showBD();
  });

  it('Combate1.simulateCombat() return Pikachu', () => {
    expect(Combate1.simulateCombat()).to.be.deep.equal("El ganador es: Pikachu");
  });

});
