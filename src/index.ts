const nameSyllables = ['akt', 'hel', 'thel', 'oss', 'fen'];
const maxSyllables = 3;

class NameGenerator { 
 
  public static createNames(): Array<String> {
    let randomNames = 10;
    let nameList:Array<String> = [];
    while (randomNames > 0) {
      let currentName = NameGenerator.createName();
      if (!nameList.includes(currentName)) {
        nameList.push(currentName);
        randomNames--;
      }
    }
    nameList.sort();
    return nameList;
  }

  public static createName(): String {
    let fullName = "";
    let nameSize = NameGenerator.getRandomInteger(1, maxSyllables+1);
    for (let i = 0; i < nameSize; i++) {
      let syllableIdx = NameGenerator.getRandomInteger(0, nameSyllables.length);
      fullName = `${fullName}${nameSyllables[syllableIdx]}`;
    }
    return fullName;
  }

  private static getRandomInteger(min:number, max:number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  }
}

console.log(NameGenerator.createNames());
