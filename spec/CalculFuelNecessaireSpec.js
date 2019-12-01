const CalculFuelNecessaire = require('../src/CalculFuelNecessaire');

describe('Calcul Fuel Necessaire', () => {

  var calculateur;

  beforeEach(() => {
    calculateur = new CalculFuelNecessaire();  
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 12', () => {
    expect(calculateur.calculerFuelPourUneMasse(12)).toBe(2);    
  });

  it('affiche une valeur dans les logs', () => {
    spy = spyOn(calculateur,'afficherResultatDansLaConsole');
    calculateur.calculerFuelPourUneMasse(12)
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 14', () => {
    expect(calculateur.calculerFuelPourUneMasse(14)).toBe(2);    
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 1969', () => {
    expect(calculateur.calculerFuelPourUneMasse(1969)).toBe(966);    
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 100756', () => {
    expect(calculateur.calculerFuelPourUneMasse(100756)).toBe(50346);    
  });

  it('renvoie la quantité de fuel à partir d un ensemble de modules', () => {
    massesDesModules = [12, 14, 1969, 100756];
    totalAttendu = 2 + 2 + 966 + 50346;
    expect(calculateur.calculerFuelPourUnEnsembleDeMasses(massesDesModules)).toBe(totalAttendu);
  });

  it('renvoie la quantité de fuel à partir d un grand ensemble de modules', () => {
    var fs = require("fs");
    var texteDuFichier = fs.readFileSync('./fixtures/day1_masses.txt', 'utf8');
    var massesDesModules = texteDuFichier.split("\n")
    expect(calculateur.calculerFuelPourUnEnsembleDeMasses(massesDesModules)).toBeGreaterThan(100000);
  });
});
