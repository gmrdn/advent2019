class IntcodeComputer {
  
  chercherNounAndVerb(intcodeDuFichier,expected) {
    for (var noun = 0; noun <= 99; noun++) {
      for (var verb = 0; verb <= 99; verb++) {
        var tryIntcode = intcodeDuFichier.slice(0);
        var codeFinalEssai =this.processIntcode(tryIntcode, noun, verb) 
        var output = codeFinalEssai[0];
        if(output == expected) {
          return [noun, verb];
        }
      }
    }
  }

  processIntcode(memory, noun, verb) {
    const INSTRUCTION_LENGTH = 4;
    var instructionPointer = 0
    if (noun && verb) {
      memory[1] = noun;
      memory[2] = verb;
    }

    while (memory[instructionPointer] !== 99) {
      var currentInstruction = memory.slice(instructionPointer, instructionPointer + 4);
      if (this.isAddition(currentInstruction) || this.isMultiplication(currentInstruction)) { 
        var res = this.getResultat(memory, currentInstruction);
        var address = this.getAddressForChange(currentInstruction);
        memory.splice(address, 1, res);
      }
      else if (this.isUnknown(currentInstruction)) {
        console.log("erreur code inconnu")
        break;
      }
      instructionPointer += INSTRUCTION_LENGTH;
    }
    console.log("la valeur est " + memory[0]);
    return memory;
  }

  getResultat(code, currentInstruction){
    var parameter1 = currentInstruction[1];
    var parameter2 = currentInstruction[2];
    var noun = parseInt(code[parameter1]);
    var verb = parseInt(code[parameter2]);
    if (this.isAddition(currentInstruction)) {
      var result =  noun + verb;
    }
    if (this.isMultiplication(currentInstruction)) {
      var result = noun * verb;
    }
    if (result == 3) {
      console.log("noun : " + noun)
      console.log("verb : " + verb)
    }
    return result;
  }

  getAddressForChange(instruction) {
    if (this.isAddition(instruction) || this.isMultiplication(instruction)) {
      return instruction[3];
    }
  }

  isAddition(instruction) {
    return instruction[0] == 1;
  }

  isMultiplication(instruction) {
    return instruction[0] == 2;
  }

  isEndOfIntCode(instruction) {
    return instruction[0] == 99;
  }

  isUnknown(instruction) {
    return (instruction[0] != 0 && instruction[0] != 1 && instruction[0] != 99);
  }
}

module.exports = IntcodeComputer;
