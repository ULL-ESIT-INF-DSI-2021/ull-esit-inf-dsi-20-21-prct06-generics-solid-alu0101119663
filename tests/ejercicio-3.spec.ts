import 'mocha';
import {expect} from 'chai';
import {StreamableCollection} from '../src/ejercicio-3/BasicStreamableCollection';
import {Pelicula} from '../src/ejercicio-3/Pelicula';
import {Serie} from '../src/ejercicio-3/Serie';
import {Documental} from '../src/ejercicio-3/Documental';

describe('Ejercicio 3 - DSIflix', () => {
  const peli1 = new Pelicula("Belleza Oculta", "15 Dic 2016", "David Frankel", "Drama", "Will Smith");
  const Cineteca = new StreamableCollection([peli1]);

  describe('BasicStreamableCollection', () => {
    it('Cineteca.busquedaNombre("Belleza Oculta") returns Belleza Oculta', () => {
      expect(Cineteca.busquedaNombre("Belleza Oculta")).to.be.deep.equal(peli1);
    });

    it('Cineteca.busquedaDirector("David Frankel") returns Belleza Oculta', () => {
      expect(Cineteca.busquedaDirector("David Frankel")).to.be.deep.equal(peli1);
    });

    it('Cineteca.busquedaFecha("15 Dic 2016") returns Belleza Oculta', () => {
      expect(Cineteca.busquedaFecha("15 Dic 2016")).to.be.deep.equal(peli1);
    });
  });

    describe('Peliculas', () => {
      it('peli1.getDate() returns 15 Dic 2016', () => {
        expect(peli1.getDate()).to.be.deep.equal("15 Dic 2016");
      });
  
      it('peli1.getDirector() returns David Frankel', () => {
        expect(peli1.getDirector()).to.be.deep.equal("David Frankel");
      });

      it('peli1.getGenero() returns Drama', () => {
        expect(peli1.getGenero()).to.be.deep.equal("Drama");
      });

      it('peli1.getName() returns Belleza Oculta', () => {
        expect(peli1.getName()).to.be.deep.equal("Belleza Oculta");
      });

      it('peli1.getProtagonista() returns Will Smith', () => {
        expect(peli1.getProtagonista()).to.be.deep.equal("Will Smith");
      });
    });

});