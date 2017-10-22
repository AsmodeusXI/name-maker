import { BaseGenerator } from '../base/base';

export class ElfGenerator extends BaseGenerator {
  private elfMin: number = 1;
  private elfMax: number = 3;
  private elfSyllables: Array<string> = ['akt', 'hel', 'thel', 'oss', 'fen'];

  constructor() {
    super();
  }

  composeName(): string {
    return this.createName(this.elfSyllables, this.elfMin, this.elfMax);
  }
}
