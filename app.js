(function () {
	'use strict';
	let fs = require('fs');
	let readline = require('readline');
	let rs = fs.ReadStream('./popu-pref.csv');
	let rl = readline.createInterface({ 'input': rs, 'output': {} });
	
	rl.on('line', (line) => {
		console.log(line);
	});
	rl.resume();
})();