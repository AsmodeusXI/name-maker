import { BaseGenerator } from '../base/base';

export class ElfGenerator extends BaseGenerator {
  private given1: Array<string> = [
    'ak', 'am', 'amo', 'an', 'ar', 'be', 'bhu', 'cle', 'dj', 'djed', 'en', 'gha', 
    'hat', 'he', 'i', 'in', 'is',  'ka', 'khem', 'ko', 'le', 'lo', 'ma', 'maa', 
    'me', 'ne', 'ni', 'ny', 'os', 'oss', 'pa', 'pek', 'psa', 'rho', 'roh', 'set', 
    'sen', 'sha', 'sik', 'te', 'thut', 'u', 'wa', 'xa', 'xan', 'xo', 'yuu', 'za'
  ];
  private given2: Array<string> = [
    'asah', 'arah', 'aron', 'cris', 'et', 'eth', 'fu', 'ga', 'iria', 'jah', 
    'jes', 'ji', 'jon', 'het', 'kesh', 'kon', 'llara', 'mat', 'mata', 'met', 
    'month', 'mos', 'mose', 'nefer', 'osa', 'otra', 'po', 'rif', 'ron', 'ryre',
    'sis', 'ter', 'thon', 'ti', 'wassa', 'yan', '-xan', '-tayit', '-te'
  ];
  private sur1: Array<string> = [
    'xanath-', 'xa-', 'zhan-', 'isk-', 'tehsa-', 'los-'
  ];
  private sur2: Array<string> = [
    'khen', 'khui', 'maat', 'mentu', 'sehep', 'nakt', 'necta', 'aehut', 'nefer',
    'neith', 'osor', 'pare', 'paser', 'pian', 'preho', 'ptol', 'raho', 'rekhe', 
    'sekhem', 'senus', 'siat', 'sobeke', 'tahar', 'takhat', 'tjan', 'user', 'wadj',
    'yan', 'amyr', 'amen'
  ];

  private composeBasic = (): string => {
    let secondMin = 0;
    let first1 = this.createName(this.given1, 1, 2);
    if (first1.length < 3) {
      secondMin = 1;
    }
    let first2 = this.createName(this.given2, secondMin, 1);
    let firstName = this.capitalize(`${first1}${first2}`);
    
    let last1 = this.createName(this.sur1, 0, 1);
    let last2 = this.createName(this.sur2, 0, 1);
    let last3 = this.createName(this.given2, 1, 1);
    let lastName = `${last1}${last2}${last3}`; 
    
    // Prevents last names with double dashes.
    if (lastName.indexOf('--') > -1) {
      lastName = lastName.replace('--', '-');
    }

    // Prevents last names starting a dash.
    if (lastName.startsWith('-')) {
      lastName = `${this.createName(this.sur2, 1, 1)}${lastName}`;
    }

    lastName = this.capitalize(lastName);
    return `${firstName} ${lastName}`;
  }

  private generationArray: Array<Function> = [
    this.composeBasic
  ];

  constructor() {
    super();
  }

  composeName(): string {
    let generationIdx = this.getRandomInteger(0, this.generationArray.length-1);
    return this.generationArray[generationIdx]();
  }
}
