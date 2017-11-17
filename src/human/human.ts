import { BaseGenerator } from '../base/base';

export class HumanGenerator extends BaseGenerator {

  private given1_single: Array<string> = [
    'dom', 'ed', 'sam', 'bly', 'wes', 'lyn', 'roy', 'ren', 'sin', 'bea', 'cam', 'char',
    'dru', 'cyn', 'gene', 'gil', 'gwen', 'gwyn', 'pam', 'prim', 'pan', 'rho'
  ];
  private given1_consonant: Array<string> = [
    'al', 'at', 'add', 'brig', 'bur', 'cas', 'ced', 'dec', 'el', 'eld', 'em',
    'err', 'falk', 'fos', 'fav', 'god', 'gris', 'hec', 'hor', 'jer', 'ken', 'kief', 
    'madd', 'med', 'nor', 'os', 'pax', 'phin', 'quin', 'rid', 'sher', 'sil', 'thom',
    'tris', 'ud', 'van', 'win', 'wal', 'wy', 'an', 'amar', 'bian', 'car', 'cher', 'daph',
    'edel', 'esmer', 'est', 'eth', 'fel', 'fr', 'har', 'hon', 'hor', 'in', 'jud', 'kir',
    'lar', 'lav', 'liv', 'lor', 'mar', 'mav', 'mer', 'min', 'mor', 'mur', 'ner', 'od',
    'oph', 'or', 'ol', 'phyl', 'quen', 'sab', 'sal', 'sil', 'sir', 'til', 'ul', 'ur', 'val',
    'vel', 'vic', 'viv', 'yvon'
  ];
  private given1_vowel: Array<string> = [
    'ade', 'eu', 'fe', 'la', 'le', 'theo', 'ti', 'wy', 'za', 'ze', 'zo', 'da', 'eloi', 'i',
    'imo', 'ivo', 'ja', 'na', 'no', 'ra', 'rosa', 'sha', 'sy', 'ta', 'tha', 'tri', 'ty', 
    'wini', 'yo'
  ];

  private given2_consonant: Array<string> = [
    'lene', 'ne', 'landa', 'fred', 'da', 'ta', 'toria', 'sa', 'dora', 'ver', 'bil', 'na',
    'lome', 'lind', 'rina', 'chel', 'tessa', 'rose', 'dora', 'mena', 'lis', 'tha', 'lia',
    'mony', 'mi', 'ris', 'tyn', 'la', 'sey', 'ra', 'de', 'mine', 'dolyn', 'thia', 'trix',
    'the', 'ke', 'men', 'cilla', 'cho', 'genia', 'vieve', 'fer', 'son', 'bion', 'den',
    'wood', 'gess', 'ham', 'ton', 'ric', 'man', 'per', 'ric', 'las', 'gar', 'win', 'lan',
    'manuel', 'rol', 'gene', 'frey', 'vin', 'ter', 'car', 'dox', 'don', 'dy', 'mour', 
    'dan', 'las', 'son', 'ce', 'ger'
  ];
  private given2_vowel: Array<string> = [
    'e', 'a', 'ian', 'ia', 'ele', 'ena', 'iel', 'ette', 'erva', 'ise', 'anca', 'aide', 'ity',
    'ion', 'inic', 'eas'
  ];
  
  // Surnames are fairly standard.
  // TODO: Single and triple variants?
  private sur1: Array<string> = [
    'bat', 'bax', 'beau', 'beck', 'aver', 'ash', 'arter', 'arthur', 'albert', 'abram', 'ban', 
    'black', 'blake', 'bone', 'blood', 'booth', 'breckin', 'bris', 'broad', 'buck', 'bull', 
    'cald', 'carl', 'carp', 'castle', 'chamber', 'clark', 'cliff', 'col', 'collin', 'com',
    'cook', 'coop', 'corn', 'court', 'cox', 'cross', 'dalt', 'dane', 'deer', 'derr', 'dick',
    'drake', 'dur', 'east', 'west', 'eccel', 'eld', 'ell', 'fair', 'farn', 'fear', 'faulk',
    'fish', 'flem', 'fitz', 'frank', 'free', 'frost', 'fult', 'garden', 'gage', 'glad', 'gran',
    'grant', 'hall', 'hard', 'har', 'heath', 'henry', 'horne', 'hunt', 'hur', 'ibb', 'ing',
    'jack', 'james', 'jard', 'jean', 'jenk', 'joy', 'keigh', 'ken', 'kim', 'king', 'kitch',
    'lac', 'land', 'lang', 'leigh', 'leon', 'long', 'lyn', 'mac', 'man', 'mar', 'moore',
    'morris', 'nash', 'neil', 'nix', 'norr', 'oak', 'os', 'pad', 'over', 'page', 'park',
    'pater', 'pay', 'pear', 'pend', 'pier', 'quick', 'rad', 'rain', 'rake', 'read',
    'rayne', 'rey', 'rich', 'rim', 'roach', 'roder', 'roll', 'rose', 'rowe', 'roy',
    'rush', 'rye', 'sal', 'snid', 'simon', 'smith', 'solo', 'stain', 'spear', 'strange',
    'summer', 'sweet', 'tail', 'task', 'terr', 'thatch', 'thor', 'thorn', 'timber', 'tink', 
    'toll', 'town', 'trace', 'under', 'up', 'van', 'vic', 'wade', 'wake', 'walk', 'wall',
    'walt', 'ward', 'wheel', 'win', 'wynd'
  ];
  private sur2: Array<string> = [
    'wood', 'son', 'kin', 'worth', 'ander', 'drews', 'ton', 'cher', 'wright', 'berry', 
    'away', 'water', 'ley', 'tine', 'cock', 'win', 'croft', 'ister', 'nett', 'ter', 'tram',
    'burn', 'lee', 'wright', 'ridge', 'ster', 'rook', 'tain', 'well', 'trell', 'lyle', 'ton',
    'bert', 'stock', 'stable', 'court', 'nett', 'croft', 'man', 'rick', 'house', 'wight', 
    'mer', 'wes', 'wyn', 'cott', 'wart', 'bairn', 'roy', 'rest', 'ster', 'land', 'nett', 'wyn',
    'zier', 'dard', 'ver', 'ville', 'grave', 'don', 'wick', 'king', 'tower', 'lam', 'cutt',
    'sett', 'kins', 'ward', 'ram', 'vine', 'ston', 'vitt', 'nard', 'staff', 'low', 'lowe',
    'chand', 'den', 'shall', 'dows', 'glen', 'chell', 'day', 'natt', 'bourne', 'law', 'ish',
    'ent', 'sons', 'kins', 'grew', 'kett', 'att', 'scott', 'foot', 'cell', 'shire', 'clyff',
    'sey', 'noll', 'vage', 'mon', 'ford', 'gent', 'brooke', 'row', 'burne', 'simon', 'clair',
    'ing', 'gate', 'stack', 'thorpe', 'steel', 'grove', 'er', 'bull', 'robe', 'waters',
    'taker', 'winter', 'field', 'chester', 'wolf', 'young'
  ];

  constructor() {
    super();
  }

  private composeBasic = (): string => {
    let firstName, firstSyl1, firstSyl2, firstSyl3: string;
    let firstNameSeed: number = this.getRandomInteger(0, 7);
    switch (firstNameSeed) {
      case 0:
        firstName = this.createName(this.given1_single, 1, 1);
        break;
      case 1:
      case 2:
        firstSyl1 = this.createName(this.given1_consonant, 1, 1);
        firstSyl2 = this.createName(this.given2_vowel, 1, 1);
        firstName = `${firstSyl1}${firstSyl2}`;
        break;
      case 3:
      case 4:
        firstSyl1 = this.createName(this.given1_vowel, 1, 1);
        firstSyl2 = this.createName(this.given2_consonant, 1, 1);
        firstName = `${firstSyl1}${firstSyl2}`;
        break;
      case 5:
        firstSyl1 = this.createName(this.given1_consonant, 1, 1);
        firstSyl2 = this.createName(this.given2_consonant, 1, 1);
        firstSyl3 = this.createName(this.given2_vowel, 0, 1);
        firstName = `${firstSyl1}${firstSyl2}${firstSyl3}`;
        break;
      case 6:
        firstSyl1 = this.createName(this.given1_single, 1, 1);
        firstSyl2 = this.createName(this.given2_vowel, 0, 1);
        firstName = `${firstSyl1}${firstSyl2}`;
        break;
      case 7:
        firstSyl1 = this.createName(this.given1_vowel, 1, 1);
        firstSyl2 = this.createName(this.given2_consonant, 1, 1);
        firstSyl3 = this.createName(this.given2_vowel, 1, 1);
        firstName = `${firstSyl1}${firstSyl2}${firstSyl3}`;
        break;
    }

    // TODO: If 3 of same character, make into 2.
    firstName = this.capitalize(`${firstName}`);

    let lastSyl1Floor: number = this.getRandomInteger(0, 1);
    let lastSyl2Floor: number  = 1 - lastSyl1Floor;
    let last1 = this.createName(this.sur1, lastSyl1Floor, 1);
    let last2 = this.createName(this.sur2, lastSyl2Floor, 1);

    // Ensure these two syllables are not the same, that's just silly.
    while (last2 === last1) {
      last2 = this.createName(this.sur2, 1, 1);
    }

    let lastName = this.capitalize(`${last1}${last2}`);

    return `${firstName} ${lastName}`;
  }

  private generationArray: Array<Function> = [
    this.composeBasic
  ];

  composeName(): string {
    let genIdx = this.getRandomInteger(0, this.generationArray.length-1);
    return this.generationArray[genIdx]();
  }
}
