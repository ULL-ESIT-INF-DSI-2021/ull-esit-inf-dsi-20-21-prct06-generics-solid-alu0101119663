import 'mocha';
import {expect} from 'chai';
import {Velocidad, VelocidadUnit} from '../src/ejercicio-2/Velocidad';
import {Masa, MasaUnit} from '../src/ejercicio-2/Masa';
import {Longitud, LongitudUnit} from '../src/ejercicio-2/Longitud';
import {Tiempo, TiempoUnit} from '../src/ejercicio-2/Tiempo';
import {Temperatura, TemperaturaUnit} from '../src/ejercicio-2/Temperatura';
import {Fuerza, FuerzaUnit} from '../src/ejercicio-2/Fuerza';
import {Volumen, VolumenUnit} from '../src/ejercicio-2/Volumen';

describe('Ejercicio 2 - Conversor de unidades', () => {
  const medida1 = new Velocidad(1, VelocidadUnit.Kmh);
  it('Se puede pasar de kmh a ms', () => {  
    expect(medida1.convertidor("Ms")).to.be.deep.equal("0.2777777777777778Ms")
  });

  const medida2 = new Masa(1, MasaUnit.Kg);
  it('Se puede pasar de kg a Onza', () => {  
    expect(medida2.convertidor("Onza")).to.be.deep.equal("35.274Onzas")
  });

  const medida3 = new Longitud(1, LongitudUnit.Metro);
  it('Se puede pasar de Metro a Pie', () => {  
    expect(medida3.convertidor("Pie")).to.be.deep.equal("3.281Pie")
  });

  const medida4 = new Tiempo(1, TiempoUnit.Min);
  it('Se puede pasar de Minuto a Segundos', () => {  
    expect(medida4.convertidor("Seg")).to.be.deep.equal("60Seg")
  });

  const medida5 = new Temperatura(1, TemperaturaUnit.C);
  it('Se puede pasar de grados Celcius a grados Fahrenheit', () => {  
    expect(medida5.convertidor("F")).to.be.deep.equal("33.8F")
  });

  const medida6 = new Fuerza(1, FuerzaUnit.Newton);
  it('Se puede pasar de Newton a Kilopondio', () => {  
    expect(medida6.convertidor("Kilopondio")).to.be.deep.equal("0.10196798205363515Kilopondio")
  });

  const medida7 = new Volumen(1, VolumenUnit.Litro);
  it('Se puede pasar de Litro a Galon Imperial', () => {  
    expect(medida7.convertidor("Galon")).to.be.deep.equal("0.21997360316761988Galon")
  });

});
