const fs = require('fs');

const countries = fs
	.readFileSync("countries.txt", { encoding: 'utf8', flag: 'r' })
	.split("\n");

countries.shift(); 

const countriesList =
    countries
        .map(country => {
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
        })
        .sort((a, b) => b.density - a.density)
        .map(c => `${Object.values(c)}`)

const csv = [ "Country,Population,Area,Density", ...countriesList].join("\n");
fs.writeFileSync("countries.csv", csv);
