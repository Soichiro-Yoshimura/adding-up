(function () {
	'use strict';
	let fs = require('fs');
	let readline = require('readline');
	let rs = fs.ReadStream('./popu-pref.csv');
	let rl = readline.createInterface({ 'input': rs, 'output': {} });
	
	let map = new Map(); // key: 都道府県 value: 集計データのオブジェクト
	rl.on('line', (line) => {
		let columns = line.split(',');
		let year = columns[0];
		let prefecture = columns[2];
		let popu = columns[7];
		if (year === '2010' || year === '2015') {
			let value = map.get(prefecture);
			if (!value) {
				value = {
					p10: 0,
					p15: 0,
					change: null
				};
			}
			if (year === '2010') {
				value.p10 += parseInt(popu);
			}
			if (year === '2015') {
				value.p15 += parseInt(popu);
			}
			map.set(prefecture, value);
		}
	});
	rl.resume();
	rl.on('close', () => {
		console.log(map);
	});
})();