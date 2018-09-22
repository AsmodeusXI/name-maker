import { GeneratorMain } from './index';

function run(): void {
	let culture: string = process.argv[2];
  let namesDesired: number = Number(process.argv[3]);
  if (!culture || !namesDesired) {
    console.error("Please provide both the desired culture and number of names");
    return;
  }
  console.log(GeneratorMain.generateNames(culture, namesDesired));
}

run();
