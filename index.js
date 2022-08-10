import { readFileSync, writeFileSync } from 'fs';

const countries = readFileSync("files/countries.txt", {
    encoding: 'utf8',
    flag: 'r'
  }).split("\n");

countries.shift();

const countriesList =
    countries
        .map(country => parseLine(country))
        .sort((a, b) => b.density - a.density)
        .map(c => `${Object.values(c)}`)

const csv = [ "Country,Population,Area,Density", ...countriesList].join("\n");
writeFileSync("files/countries.csv", csv);

export default function parseLine(country) {
  // The regex search for the firsts not digits until the space,
  // then get the area and population numbers.
  const { name, numbers } = /(?<name>[^\d]*)\s+(?<numbers>.*)/.exec(country).groups
  const [ population, area ] = numbers.split(" ").map(n => n.replace(",", ""));
  return  {
    name,
    population,
    area,
    density: parseFloat(population) / parseFloat(area)
  }
}
