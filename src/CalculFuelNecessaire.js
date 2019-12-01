class CalculFuelNecessaire {

  calculerFuelPourUneMasse(masse) {
    var fuelNecessaire = this.calculerFuelPourUneMassePlusMasseDuFuel(masse)
    this.afficherResultatDansLaConsole(fuelNecessaire);
    return fuelNecessaire;
  }

  calculerFuelPourUneMassePlusMasseDuFuel(masse) {
    var cumulFuelNecessaire = 0;
    var fuelNecessairePourCetteMasse = Math.floor(masse / 3) - 2;
    if (fuelNecessairePourCetteMasse > 0) {
      cumulFuelNecessaire = fuelNecessairePourCetteMasse + this.calculerFuelPourUneMassePlusMasseDuFuel(fuelNecessairePourCetteMasse);
    }
    return cumulFuelNecessaire;
  }

  calculerFuelPourUnEnsembleDeMasses(listeMasses) {
    var fuelTotal = 0;
    for (var indiceMasse=0; indiceMasse < listeMasses.length; indiceMasse++) {
      fuelTotal += this.calculerFuelPourUneMasse(listeMasses[indiceMasse]);
    }
    this.afficherResultatDansLaConsole(fuelTotal);
    return fuelTotal;
  }
  
  afficherResultatDansLaConsole(resultat){
    console.log(resultat);
  }
}

module.exports = CalculFuelNecessaire;
