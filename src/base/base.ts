export abstract class BaseGenerator {
  abstract composeName(): string;

  public createNames(namesRequired: number): Array<string> {
		let nameList: Array<string> = [];
		let attempts = 0;
		while (namesRequired > 0 && attempts < 5) {
			let name = this.composeName();
      if (!nameList.includes(name)) {
        nameList.push(name);
        namesRequired--;
			} else {
				attempts++;
			}
    }
    nameList.sort();
    return nameList;
  }

  createName(syllables: Array<string>, min: number, max: number): string {
    let name = "";
    let sylLength = this.getRandomInteger(min, max+1);
    for (let i = 0; i < sylLength; i++) {
      let sylIdx = this.getRandomInteger(0, syllables.length-1);
      name = `${name}${syllables[sylIdx]}`;
    }
    return name;
  }

  getRandomInteger(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  }

  capitalize(str: string): string {
    let capital = str.substring(0,1).toUpperCase();
    let theRest = str.substring(1);
    return `${capital}${theRest}`;
  }
}
