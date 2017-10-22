import { BaseGenerator } from './base/base';
import { ElfGenerator } from './elf/elf';
import { HumanGenerator } from './human/human';

export class GeneratorMain {
  static run(): void {
    let culture: string = process.argv[2];
    let namesDesired: number = Number(process.argv[3]);
    if (!culture || !namesDesired) {
      console.error("Please provide both the desired culture and number of names");
      return;
    }
    console.log(GeneratorMain.generateNames(culture, namesDesired));
  }

  static generateNames(culture: string, namesDesired: number): Array<string> {
    let nameGenerator: BaseGenerator;
    switch (culture) {
      case "elf":
        nameGenerator = new ElfGenerator();
        break;
      case "human":
        nameGenerator = new HumanGenerator();
        break;
      default:
        throw new Error("Culture not found!");
    }
    return nameGenerator.createNames(namesDesired);
  }
}

GeneratorMain.run();
