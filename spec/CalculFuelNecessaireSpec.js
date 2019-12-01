const CalculFuelNecessaire = require('../src/CalculFuelNecessaire');

describe('Calcul Fuel Necessaire', () => {

  var calculateur;

  beforeEach(() => {
    calculateur = new CalculFuelNecessaire();  
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 12', () => {
    expect(calculateur.calculFuelPourMasse(12)).toBe(2);    
  });

  it('affiche une valeur dans les logs', () => {
    spy = spyOn(calculateur,'afficherResultatDansLaConsole');
    calculateur.calculFuelPourMasse(12)
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 14', () => {
    expect(calculateur.calculFuelPourMasse(14)).toBe(2);    
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 1969', () => {
    expect(calculateur.calculFuelPourMasse(1969)).toBe(654);    
  });

  it('renvoie la qualité de fuel necessaire pour une masse de 100756', () => {
    expect(calculateur.calculFuelPourMasse(100756)).toBe(33583);    
  });

  it('renvoie la quantité de fuel à partir d un ensemble de modules', () => {
    massesDesModules = [12,14, 1969, 100756];
    var totalAttendu = 2 + 2 + 654 + 33583
    expect(calculateur.calculFuelPourEnsemble(massesDesModules)).toBe(totalAttendu);
  });

  it('renvoie la quantité de fuel à partir d un grand ensemble de modules', () => {
    var fs = require("fs");
    var texteDuFichier = fs.readFileSync('./fixtures/day1_masses.txt', 'utf8');
    var massesDesModules = texteDuFichier.split("\n")
    expect(calculateur.calculFuelPourEnsemble(massesDesModules)).toBeGreaterThan(100000);
  });
});
