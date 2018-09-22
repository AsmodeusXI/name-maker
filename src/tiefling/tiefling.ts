import { BaseGenerator } from '../base/base';

export class TieflingGenerator extends BaseGenerator {
	private partsOfSpeech: any = {
		'adverb': ['That'],
		'article': ['A', 'A', 'The', 'The', 'The', 'The'],
		'noun': [
			'Eclipse', 'Blood', 'Wound', 'Moon',
			'Scar', 'Machine', 'Fire', 'Eye', 'Solace',
			'Whisper', 'Scream', 'Pit', 'Wish', 'Devotion',
			'Cant', 'Pyre', 'Forsaken', 'Sight', 'Prophecy',
			'Coward', 'Cabal', 'Seal', 'Canticle', 'Legend',
			'Will', 'Temerity', 'Authority', 'Empire', 'Acolyte',
			'Divinity', 'Faith', 'Iron', 'Frost', 'Song', 'Blade',
			'Fist', 'Shadow', 'Wraith', 'Demon', 'Geist', 'Specter',
			'Sovereign', 'Empress', 'Hex'
		],
		'pronoun': ['Who', 'He', 'She', 'They', 'Which'],
		'possess_pronoun': ['Whom', 'Him', 'Her', 'Them', 'Which'],
		'preposition': [
			'Of', 'At', 'To', 'For', 'With', 'Towards',
			'Over', 'Within', 'In', 'Beneath', 'Onto', 'After',
			'Against', 'Beyond'
		],
		'verb': [
			'Searches', 'Hunts', 'Wanders', 'Watches', 
			'Weeps', 'Prays', 'Preys', 'Cries', 'Seeks',
			'Hates', 'Follows', 'Mourns', 'Dissolves', 'Devours',
			'Wars', 'Ends', 'Destroys', 'Delivers', 'Bears', 'Sustains',
			'Urges', 'Compels', 'Ponders', 'Portends', 'Stalks', 'Torments',
			'Manifests', 'Infests'
		],
		'adjective': [
			'Grand', 'Vengeful', 'Lawful', 'Contrite', 'Alabaster',
			'Obsidian', 'Fallen', 'Majestic', 'Garish', 'Silver',
			'Foul', 'Transcendant', 'Diabolical', 'Spiteful', 
			'Conquering', 'Triumphant', 'Faultless', 'Dedicated',
			'Perpetual', 'Martyred', 'Squandered', 'Impossible'
		]
	};

	private nameStructures: Array<Array<string>> = [
		['article','noun','pronoun','verb'],
		['pronoun', 'verb', 'article', 'noun'],
		['pronoun', 'verb', 'preposition', 'article', 'noun'],
		['article','noun','adverb','verb'],
		['article','noun','preposition','article','noun'],
		['preposition', 'possess_pronoun', 'article', 'noun', 'verb'],
		['article', 'adjective', 'noun'],
		['adjective', 'noun', 'preposition', 'article', 'noun'],
	];

	private composeBasic = (): string => {
		const struct = this.nameStructures[
			this.getRandomInteger(0, this.nameStructures.length)
		];
		const nameArray = struct.map((piece) => {
			return this.partsOfSpeech[piece][
				this.getRandomInteger(0, this.partsOfSpeech[piece].length)
			];
		});
		this.fixGrammar(nameArray, struct);
		return nameArray.join(' ');
	}
	
	private fixGrammar(nameArray: Array<string>, grammarStruct: Array<string>): void {
		// "A" and vowel-starts
		let artInstance = 0;
		let artIdx = 0;
		while (artInstance < grammarStruct.length) {
			if (grammarStruct.includes('article', artInstance)) {
				artIdx = grammarStruct.indexOf('article', artInstance);
				if (nameArray[artIdx] === 'A' 
					&& artIdx + 1 < nameArray.length 
					&& this.isVowel(nameArray[artIdx + 1][0])) {
						nameArray[artIdx] = 'An';
				}
				artInstance = artIdx + 1;
			} else {
				artInstance = grammarStruct.length;
			}
		}

		// "They" and verb conjugation
		if (grammarStruct.includes('pronoun') && grammarStruct.includes('verb')) {
			const proIdx = grammarStruct.indexOf('pronoun');
			const vIdx = grammarStruct.indexOf('verb');
			if (nameArray[proIdx] === 'They' && nameArray[vIdx].slice(-1) === 's') {
				if (nameArray[vIdx].slice(-3) === 'ies') {
					nameArray[vIdx] = nameArray[vIdx].slice(0, -3).concat('y');
				} else if (nameArray[vIdx].slice(-3) === 'ves' || nameArray[vIdx].slice(-3) === 'ges') {
					nameArray[vIdx] = nameArray[vIdx].slice(0, -1);
				} else if (nameArray[vIdx].slice(-2) === 'es') {
					nameArray[vIdx] = nameArray[vIdx].slice(0, -2);
				} else {
					nameArray[vIdx] = nameArray[vIdx].slice(0, -1);
				}
			}
		}
	}

	private isVowel(letter: string): boolean {
		return ['A', 'E', 'I', 'O', 'U'].includes(letter);
	}

  private generationArray: Array<Function> = [
    this.composeBasic
  ];

  composeName(): string {
    let genIdx = this.getRandomInteger(0, this.generationArray.length-1);
    return this.generationArray[genIdx]();
  }
}
