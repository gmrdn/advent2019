class CalculFuelNecessaire {
  
  calculFuelPourMasse(masse) {
    var fuelNecessaire = Math.floor(masse / 3) - 2;
    this.afficherResultatDansLaConsole(fuelNecessaire);
    return fuelNecessaire;
  }

  calculFuelPourEnsemble(listeMasses) {
    var somme = 0;
    for (var i=0; i < listeMasses.length; i++) {
      somme += this.calculFuelPourMasse(listeMasses[i]);
    }
    this.afficherResultatDansLaConsole(somme);
    return somme;
  }
  
  afficherResultatDansLaConsole(resultat){
    console.log(resultat);
  }
}

module.exports = CalculFuelNecessaire;
