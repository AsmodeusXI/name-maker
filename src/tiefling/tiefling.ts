import { BaseGenerator } from '../base/base';

export class TieflingGenerator extends BaseGenerator {
  constructor() {
    super();
  }

  private composeBasic = (): string => {
    return `Tiefling ${Date.now()}`;
  }

  private generationArray: Array<Function> = [
    this.composeBasic
  ];

  composeName(): string {
    let genIdx = this.getRandomInteger(0, this.generationArray.length-1);
    return this.generationArray[genIdx]();
  }
}
