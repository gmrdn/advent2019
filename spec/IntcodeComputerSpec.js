const IntcodeComputer = require('../src/IntcodeComputer');

describe('Calcul Intcodes', () => {

  var intcodeComputer;
  var intcodeDuFichier;

  beforeEach(() => {
    intcodeComputer = new IntcodeComputer();  
    var fs = require("fs");
    var texteDuFichier = fs.readFileSync('./fixtures/day2_intcodes.txt', 'utf8');
    intcodeDuFichier = texteDuFichier.split(",")
  });

  it('evaluer un quartet opcode 1', () => {
    var quartet = [1, 10, 20, 3];
    expect(intcodeComputer.isAddition(quartet)).toBeTrue;;
    expect(intcodeComputer.getAddressForChange(quartet)).toBe(3);
  });

  it('evaluer un quartet opcode 2', () => {
    var quartet = [2, 10, 20, 3];
    expect(intcodeComputer.isMultiplication(quartet)).toBeTrue;
    expect(intcodeComputer.getAddressForChange(quartet)).toBe(3);
  });

  it('evaluer un quartet opcode 99', () => {
    var quartet = [99, 10, 20, 3];
    expect(intcodeComputer.isEndOfIntCode(quartet)).toBeTrue;
    expect(intcodeComputer.getAddressForChange(quartet)).toBe(undefined);
  });
  
  it('evaluer un quartet opcode inconnu', () => {
    var quartet = [3, 10, 20, 3];
    expect(intcodeComputer.isUnknown(quartet)).toBeTrue;
    expect(intcodeComputer.getAddressForChange(quartet)).toBe(undefined);
  });



  it('évaluer un intcode complet', () => {
    var intcode = [1,9,10,3,
                  2,3,11,0,
                  99,
                  30,40,50];
    
    expect(intcodeComputer.processIntcode(intcode))
        .toEqual([3500,9,10,70,
              2,3,11,0,
              99,
              30,40,50]);
  });

  it('évaluer un intcode exemple 1', () => {
    var intcode = [1,0,0,0,99];
    
    expect(intcodeComputer.processIntcode(intcode))
        .toEqual([2,0,0,0,99]);
  });
  
  it('évaluer un intcode exemple 2', () => {
    var intcode = [2,3,0,3,99];
    
    expect(intcodeComputer.processIntcode(intcode))
        .toEqual([2,3,0,6,99]);
  });
  
  it('évaluer un intcode exemple 3', () => {
    var intcode = [2,4,4,5,99,0];
    
    expect(intcodeComputer.processIntcode(intcode))
        .toEqual([2,4,4,5,99,9801]);
  });

  it('évaluer un intcode exemple 4', () => {
    var intcode = [1,1,1,4,99,5,6,0,99];
    
    expect(intcodeComputer.processIntcode(intcode))
        .toEqual([30,1,1,4,2,5,6,0,99]);
  });

  it('évaluer un intcode énorme', () => {
    var expected = 2890696
    var codeFinal = intcodeComputer.processIntcode(intcodeDuFichier, 12, 2)
    expect(codeFinal[0]).toBe(expected);
  });

  it('évaluer un intcode en changeant les noun et verb', () => {
    var expected = 970699
    var codeFinal = intcodeComputer.processIntcode(intcodeDuFichier, 4, 5)
    expect(codeFinal[0]).toBe(expected);
  });

  it('chercher un noun et un verb (12 et 2) en fonction de la valeur attendue en 0', () => {
    var expected = 2890696;
    var nounAndVerb = intcodeComputer.chercherNounAndVerb(intcodeDuFichier,expected);
    expect(nounAndVerb).toEqual([12,2]);
  });

  it('chercher un noun et un verb en fonction de la valeur attendue en 0', () => {
    var expected = 19690720;
    var nounAndVerb = intcodeComputer.chercherNounAndVerb(intcodeDuFichier,expected);
    expect(nounAndVerb).toEqual([82,26]);
  });


});
