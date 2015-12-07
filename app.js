(function () {
	'use strict';
	let fs = require('fs');
	let readline = require('readline');
	let rs = fs.ReadStream('./popu-pref.csv');
	let rl = readline.createInterface({ 'input': rs, 'output': {} });
	
	rl.on('line', (line) => {
		let columns = line.split(',');
		let year = columns[0];
		let prefecture = columns[2];
		let popu = columns[7];
		if (year === '2010' || year === '2015') {
			console.log(year);
			console.log(prefecture);
			console.log(popu);
		}
	});
	rl.resume();
})();