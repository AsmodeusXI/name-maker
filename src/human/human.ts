import { BaseGenerator } from '../base/base';

export class HumanGenerator extends BaseGenerator {
  private humanMin: number = 1;
  private humanMax: number = 4;
  private humanSyllables: Array<string> = ['al', 'ben', 'len', 'per', 'ton', 'son', 'wood'];

  constructor() {
    super();
  }

  composeName(): string {
    return this.createName(this.humanSyllables, this.humanMin, this.humanMax);
  }
}
