import { BaseGenerator } from './base/base';
import { ElfGenerator } from './elf/elf';
import { HumanGenerator } from './human/human';
import { TieflingGenerator } from './tiefling/tiefling';

export class GeneratorMain {	
  static generateNames(culture: string, namesDesired: number): Array<string> {
    let nameGenerator: BaseGenerator;
    switch (culture) {
      case "elf":
        nameGenerator = new ElfGenerator();
        break;
      case "human":
        nameGenerator = new HumanGenerator();
        break;
      case "tiefling":
        nameGenerator = new TieflingGenerator();
        break;
      default:
        throw new Error("Culture not found!");
    }
    return nameGenerator.createNames(namesDesired);
  }

  static getAvailableCultures(): Array<string> {
    return ['elf', 'human', 'tiefling'];
  }
}
